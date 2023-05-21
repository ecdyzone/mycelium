# files to edit for new coursetracks

> output of 
> grep escience -r -a

jupiterCrawl.js:const escience = require('./src/tracks/escience').default
jupiterCrawl.js:      ...grabClassesFromTrack(escience),
src/tracks/escience.js:        addingId: 'escienceArea',
src/components/report/ReportTracks.js:import escience from '../../tracks/escience'
src/components/report/ReportTracks.js:  const validEscience = validateTrack(escience, doneClasses, customBoxClasses)
src/components/classes/ClassesContainer.js:import escience from '../../tracks/escience'
src/components/classes/ClassesContainer.js:        rules={escience}
src/components/credits/TrackStatus.js:import escience from '../../tracks/escience'
src/components/credits/TrackStatus.js:  const validEscience = validateTrack(escience, doneClasses, customBoxClasses)



> grep -r escience -l
jupiterCrawl.js
src/tracks/escience.js
src/components/report/ReportTracks.js
src/components/classes/ClassesContainer.js
src/components/credits/TrackStatus.js




# useful reusable code blocks

      {
        title: <++>
        classes: <++>
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },

# TODO

## optativas livres

TODO: adicionar as que não tão no programa, como a da tati e do lahr

talvez mudar o addingId pra algo unique, com o mesmo nome do title?



## icons and structure

change icons to something more bio-icons. insects, plants, etc
bulbapedia img arquive - 24x24.gif

in v0.1 try all courses with custom.gif


Change Header site to arvoreIB


# crawler mod - bibs and more


adicionar bibliografias nos arquivos?

bibliografia é table 14 no console, mas deve ser 14-3=11 no código

table 14 - tr eq0 - td 1

ir no children children



dizer que peguei as disciplinas do projeto pedagógico 2021
disponível em: https://graduacao.ib.usp.br/images/PPP/Projeto_Pedagogico_V01-2021_1.pdf
