# TODO

## optativas livres

talvez mudar o addingId pra algo unique, com o mesmo nome do title?



## icons and structure

change icons to something more bio-icons. insects, plants, etc
bulbapedia img arquive - 24x24.gif

in v0.1 try all courses with custom.gif
for each course
- try pokemons static icons?
- insignias por departamento?


bulbasaur gif link
https://tenor.com/view/bulbasaur-gif-25215350

script to reduce size/resolution
convert bulbasaur.gif -coalesce temp.gif
convert -size 195x200 temp.gif -resize 39x40 smaller.gif

maybe change to sudowoodo or torterra, fro the tree
get gif of gameboy in bulbapedia?



mycelium amoonguss icon

https://m.bulbapedia.bulbagarden.net/wiki/File:Spr_5b_591.png
https://m.archives.bulbagarden.net/wiki/Category:Amoonguss

to revert icon
style css - transform: scaleX(-1)
mas deu erro no nextjs
https://nextjs.org/blog/styling-next-with-styled-jsx
uma opção pode ser inverter a imagem mesmo a upar as duas na pasta public

outra pode ser automatizar um sed pra adicionar o transform: scaleX(-1) no .next/server/pages/index.html
`sed -i 's#<img src="amoonguss.png" class="flex-none ml2" style="height:5rem"/></header>#<img src="amoonguss.png" class="flex-none ml2" style="height:5rem; transform: scaleX(-1)"/></header>#g' .next/server/pages/index.html`

Testes
```js
style={{ height: '5rem',  transform: scaleX(-1) }}

// OR
classname = reverseicon
  <style jsx>{`
  .reverseicon {
    transform: scaleX(-1);
  }
      `}</style>
```




## colors


grep -r blue jupiterCrawl.js next.config.js next-env.d.ts package.json package-lock.json pages public src tsconfig.json -l | xargs | pbcopy
sed -i 's/blue/green/g' $(pbpaste)

this will break some things like blue pallete definitions. Be aware. (i.e.: ProgressCircles.js has a blue palette definition)




# crawler mod - bibs and more


adicionar bibliografias nos arquivos?

bibliografia é table 14 no console, mas deve ser 14-3=11 no código

table 14 - tr eq0 - td 1

ir no children children



dizer que peguei as disciplinas do projeto pedagógico 2021
disponível em: https://graduacao.ib.usp.br/images/PPP/Projeto_Pedagogico_V01-2021_1.pdf


parece que o crawler tá meio cagado
talvez eu precise reescrever (em shell ou python?)

outra opção é o usar como base o jupiterweb crawler em python


# endings

- correct credits/copyright in footer.js
    - afafts
    - bulbasaur images
- license

# commands in order

npm install
sed -i 's/Yggdrasil2/mycelium/g' src/components/report/Report.js src/components/report/ReportManager.js
sed -i 's/Yggdrasil/mycelium/g' src/components/report/Report.js src/components/report/ReportManager.js
grep -r blue jupiterCrawl.js next.config.js next-env.d.ts package.json package-lock.json pages public src tsconfig.json -l | xargs | pbcopy
grep -r blue src -l | xargs | pbcopy
sed -i 's/blue/green/g' $(pbpaste)
sed -i 's/blue/green/g' src/components/classes/ClassesContainer.js src/components/classes/ClasseCredits.js src/components/classes/ClasseAdder.js src/components/Button.js src/components/report/ReportManager.js src/components/sidebar/ElectivesManager.js src/components/sidebar/ScheduleManager.js src/components/sidebar/Searchbar.js src/components/credits/CreditsProgress.js src/components/credits/SpecialOptatives.js
copy by hand: Header.js & ProgressCircles.js & README.md
npm run build
sed -i 's#<img src="amoonguss.png" class="flex-none ml2" style="height:5rem"/></header>#<img src="amoonguss.png" class="flex-none ml2" style="height:5rem; transform: scaleX(-1)"/></header>#g' .next/server/pages/index.html
npm start


# to check

@fortawesome ??? mistype ??
