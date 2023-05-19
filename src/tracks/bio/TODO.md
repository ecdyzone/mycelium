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
