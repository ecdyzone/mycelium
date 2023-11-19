require = require('esm')(module)
const fs = require('fs')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
// const cheerioAdv = require('cheerio-advanced-selectors')
// const cheerio = cheerioAdv.wrap(require('cheerio'))

// const geral = require('./src/tracks/geral').default
// const teoria = require('./src/tracks/teoria').default
// const escience = require('./src/tracks/escience').default
// const sistemas = require('./src/tracks/sistemas').default
// const ia = require('./src/tracks/ia').default
// TODONE - add bio tracks
const nucleobasico = require('./src/tracks/nucleobasico').default
const bachareladoobrigatorias = require('./src/tracks/bachareladoobrigatorias').default
const bachareladoeletivas = require('./src/tracks/bachareladoeletivas').default
const bachareladolivres = require('./src/tracks/bachareladolivres').default
const licenciaturaobrigatorias = require('./src/tracks/licenciaturaobrigatorias').default
const licenciaturalivres = require('./src/tracks/licenciaturalivres').default

const grabClassesFromBoxes = boxes =>
  boxes.reduce((acc, cur) => [...acc, ...cur.classes], [])

const grabClassesFromTrack = track => [
  ...grabClassesFromBoxes(track.boxes.center),
  ...grabClassesFromBoxes(track.boxes.left),
  ...grabClassesFromBoxes(track.boxes.right),
]

; (async function () {

  // const allClasses = Array.from(
  //   new Set([
  //     // ...grabClassesFromTrack(geral),
  //     // ...grabClassesFromTrack(teoria),
  //     // ...grabClassesFromTrack(escience),
  //     // ...grabClassesFromTrack(sistemas),
  //     // ...grabClassesFromTrack(ia),
  //     // TODONE - add bio tracks
  //     ...grabClassesFromTrack(nucleobasico),
  //     // TODOING - testing crawler only with nucleobasico
  //     // ...grabClassesFromTrack(bachareladoobrigatorias),
  //     // ...grabClassesFromTrack(bachareladoeletivas),
  //     // ...grabClassesFromTrack(bachareladolivres),
  //     // ...grabClassesFromTrack(licenciaturaobrigatorias),
  //     // ...grabClassesFromTrack(licenciaturalivres),
  //   ])
  // )
  const allClasses = Array.from("a")

  var remaining = allClasses.length
  var fullClasses = []
  for (const code of allClasses) {
    console.log(`Buscando materia ${code}...`)


    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--disable-gpu']
    });
  
    // Open a new page
    const page = await browser.newPage();
  
    // On this new page:
    // - open the "http://quotes.toscrape.com/" website
    // - wait until the dom content is loaded (HTML is ready)
    
    await page.goto("file:///home/camu/BIO0307.html", {
    // await page.goto(`https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=${code}`, {
      waitUntil: "domcontentloaded",
    });
  
    const content = await page.content();
      
    const $ = cheerio.load(content)




    const headerTable = $(
      '#layout_conteudo form[name=form1] table tr table:eq(2)'
    )
    const name = $('tr:eq(4)', headerTable)
      .text()
      .split('-')[1]
      .trim()

    const creditsTable = $(
      '#layout_conteudo form[name=form1] table tr table:eq(3)'
    )
    const credits = $('tr:eq(0)', creditsTable)
      .text()
      .replace(/\D/g, '')
    const wcredits = $('tr:eq(1)', creditsTable)
      .text()
      .replace(/\D/g, '')

    let summaryTable = $(
      '#layout_conteudo form[name=form1] table tr table:eq(5)'
    )
    if (
      $('tr:eq(0)', summaryTable)
        .text()
        .includes('Docente')
    ) {
      summaryTable = summaryTable.next('table')
    }
    const summaryRow = $('tr', summaryTable).filter(
      (_, el) =>
        $(el)
          .text()
          .trim() === 'Programa'
    )
    const summary = summaryRow
      .next('tr')
      .text()
      .trim()

    console.log(`Buscando requisitos ${code}...`)
    const dependencies = await fetchDependencies(page, code)

    console.log(`Finalizando ${code}...`)
    await browser.close();

    remaining -= 1
    console.log(`Faltam ${remaining}...`)

    fullClasses.push({ code, name, credits, wcredits, summary, dependencies })
  }

  fs.writeFileSync(
    // './src/definitions/allclasses.json',
    './src/definitions/allclasses-test.json',
    JSON.stringify(fullClasses, null, 4)
  )
})()

const fetchDependencies = async (page, code) => {
  await page.open(
    // `https://uspdigital.usp.br/jupiterweb/listarCursosRequisitos?coddis=${code}`
    "file:///home/camu/GSA.html"
  )
  const content = await page.property('content')
  const $ = cheerio.load(content)
  const dependencies = []

  if (
    $('#web_mensagem')
      .text()
      .includes('Disciplina não tem requisitos')
  )
    return dependencies

  const depsTable = $('#layout_conteudo form[name=form1] table table:eq(2)')

  let depsRow = $('tr', depsTable).filter((_, el) =>
    $(el)
      .text()
      .trim()
      .includes('45052')
  )

  if (!depsRow.length) return dependencies

  while ((depsRow = depsRow.next('tr')).text().trim() !== '') {
    if (
      depsRow
        .last('td')
        .text()
        .includes('fraco')
    )
      continue

    dependencies.push(
      depsRow
        .first('td')
        .text()
        .split('-')[0]
        .trim()
    )
  }

  return dependencies
}
