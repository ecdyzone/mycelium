no geral parece estar pronto. Agora tento compilar e dá problema em pequenos detalhes que tavez exijam que eu entre mais no código. Como deixar ele mais genérico? sem precisar do boxes right lft, checar o validate? preciso adicionar o codigo de validation que tinha em alguns tracks.js nos meus arquivos?


right boxes nucleobasico erro

tirar o statistics eletive, etcs...
to tentando ir sem pra ver se quebra

talvez rodar o validate já resolveria?
npm run validate?
ou npm validate

as imagens não dão erro, ele já cuida disso jogando pro custom

e aí, qual o problema agora?

boxes.right not iterable




no geral parece estar pronto. Agora tento compilar e dá problema em pequenos detalhes que tavez exijam que eu entre mais no código. Como deixar ele mais genérico? sem precisar do boxes right lft, checar o validate? preciso adicionar o codigo de validation que tinha em alguns tracks.js nos meus arquivos?


right boxes nucleobasico erro

tirar o statistics eletive, etcs...
to tentando ir sem pra ver se quebra

talvez rodar o validate já resolveria?
npm run validate?
ou npm validate

as imagens não dão erro, ele já cuida disso jogando pro custom

e aí, qual o problema agora?

boxes.right not iterable







1. working build v0.1.0
2. o que acontece se nucleobasico só tiver lado esquerdo? - build error
3. e se tiver lado direito vazio? resolve? SIM !  `right: [],` Sempre precisa ter ambos, mesmo que vazios
    3.1. bachareladoobrigatórias pode ser resolvido com esse mesmo problema
4. E se eu tirar o ClasseTypes.STATISTICS do nucleobasico.js? quebra? sim. 
5. mas e se eu deletar tudo que faz referencia a ele?

in ScheduleBox.js import PropTypes 
prop-types is not at the dependency list. run 'npm i -S prop-types' to add it


transformar isso num guia para se ajustar para outros institutos, outras disciplinas... algo genérico independente do curso e talvez até independente da universidade




ao acabar, dar uma geral. E claro, fazer backup antes localmente (2, por segurança)
https://www.howtogeek.com/devops/how-to-remove-a-commit-from-github/



add prop-types nas dependencias e deixar isso explícito no commit. Talvez abrir até um issue lá?



- ver de adaptar o stastistics and science classes pra categorizações de bacharelado e licenciatura. Pode ser uma paralela. Em definition/constants
- existe um bug aqui de que o mandatory classetypes só funciona uma vez, numa boxes.left ou boxes.right depois disso é contabilizado como eletiva
- apagando o mandatory do nucleobasico.js, da erro na build



# todo

add validation by credits in non mandatory tracks (eletivas e livres):
- Bacharelado Eletivas
- Bacharelado Livres
- Licenciatura Livres



# log


`cat ~/.npm/_logs/2023-11-18T20_45_07_150Z-debug.log`

0 info it worked if it ends with ok
1 verbose cli [ '/home/camu/.config/nvm/versions/node/v8.0.0/bin/node',
1 verbose cli   '/home/camu/.config/nvm/versions/node/v8.0.0/bin/npm',
1 verbose cli   'run',
1 verbose cli   'crawler' ]
2 info using npm@5.0.0
3 info using node@v8.0.0
4 verbose run-script [ 'precrawler', 'crawler', 'postcrawler' ]
5 info lifecycle mycelium@1.0.0~precrawler: mycelium@1.0.0
6 silly lifecycle mycelium@1.0.0~precrawler: no script for precrawler, continuing
7 info lifecycle mycelium@1.0.0~crawler: mycelium@1.0.0
8 verbose lifecycle mycelium@1.0.0~crawler: unsafe-perm in lifecycle true
9 verbose lifecycle mycelium@1.0.0~crawler: PATH: /home/camu/.config/nvm/versions/node/v8.0.0/lib/node_modules/npm/bin/node-gyp-bin:/home/camu/code/projetos-meus/mycelium/node_modules/.bin:/home/camu/.config/nvm/versions/node/v8.0.0/bin:/home/camu/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/home/camu/.local/share/gem/ruby/3.0.0/bin:/home/camu/.local/share/gem/ruby/3.0.0/bin
10 verbose lifecycle mycelium@1.0.0~crawler: CWD: /home/camu/code/projetos-meus/mycelium
11 silly lifecycle mycelium@1.0.0~crawler: Args: [ '-c', 'node jupiterCrawl.js' ]
12 silly lifecycle mycelium@1.0.0~crawler: Returned: code: 1  signal: null
13 info lifecycle mycelium@1.0.0~crawler: Failed to exec crawler script
14 verbose stack Error: mycelium@1.0.0 crawler: `node jupiterCrawl.js`
14 verbose stack Exit status 1
14 verbose stack     at EventEmitter.<anonymous> (/home/camu/.config/nvm/versions/node/v8.0.0/lib/node_modules/npm/lib/utils/lifecycle.js:283:16)
14 verbose stack     at emitTwo (events.js:125:13)
14 verbose stack     at EventEmitter.emit (events.js:213:7)
14 verbose stack     at ChildProcess.<anonymous> (/home/camu/.config/nvm/versions/node/v8.0.0/lib/node_modules/npm/lib/utils/spawn.js:40:14)
14 verbose stack     at emitTwo (events.js:125:13)
14 verbose stack     at ChildProcess.emit (events.js:213:7)
14 verbose stack     at maybeClose (internal/child_process.js:887:16)
14 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:208:5)
15 verbose pkgid mycelium@1.0.0
16 verbose cwd /home/camu/code/projetos-meus/mycelium
17 verbose Linux 6.5.8-arch1-1
18 verbose argv "/home/camu/.config/nvm/versions/node/v8.0.0/bin/node" "/home/camu/.config/nvm/versions/node/v8.0.0/bin/npm" "run" "crawler"
19 verbose node v8.0.0
20 verbose npm  v5.0.0
21 error code ELIFECYCLE
22 error errno 1
23 error mycelium@1.0.0 crawler: `node jupiterCrawl.js`
23 error Exit status 1
24 error Failed at the mycelium@1.0.0 crawler script.
24 error This is probably not a problem with npm. There is likely additional logging output above.
25 verbose exit [ 1, true ]




## solutions

https://stackoverflow.com/questions/63115884/npm-run-test-unsafe-perm-in-lifecycle

https://github.com/webpack/webpack/issues/8254


https://github.com/cheeriojs/cheerio/discussions/2121
You won't need cheerio-advanced-selectors anymore, as positional selectors are now natively supported by Cheerio itself.

changelog
remove lines from jupitercrawl.js and package.json



husky error
husky - Git hooks failed to install code elifecycle npm err errno 1

npm cache clean --force
rm -rf node_modules .husky .next package_lock.json
npm install

husky exige node > 12.1
quebrava antes

agora to tentando com o v21.2.0 ou npm v10.2.3



## deprecated

npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated phantomjs-prebuilt@2.1.16: this package is now deprecated
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated phantom@6.3.0: This package is no longer maintained
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in
certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.



npm audit

npm audit fix --force



# NODERESET

npm cache clean --force
rm -rf node_modules .husky .next package_lock.json
npm install
