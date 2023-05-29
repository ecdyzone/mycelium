import React from 'react'
import Track from './Track'
// import geral from '../../tracks/geral'
// import sistemas from '../../tracks/sistemas'
// import ia from '../../tracks/ia'
// import escience from '../../tracks/escience'
// import teoria from '../../tracks/teoria'
// TODONE - add bio tracks
import nucleobasico from '../../tracks/nucleobasico'
import bachareladoobrigatorias from '../../tracks/bachareladoobrigatorias'
import bachareladoeletivas from '../../tracks/bachareladoeletivas'
import bachareladolivres from '../../tracks/bachareladolivres'
import licenciaturaobrigatorias from '../../tracks/licenciaturaobrigatorias'
import licenciaturalivres from '../../tracks/licenciaturalivres'

const ClassesContainer = () => {
  return (
    // <main className="flex-auto">
      // <Track
      //   title="Geral"
      //   colors={['dark-green', 'bg-light-green']}
      //   rules={geral}
      //   shouldStartOpen
      // />
      // <Track
      //   title="Sistemas de Software"
      //   colors={['dark-green', 'bg-light-green']}
      //   rules={sistemas}
      // />
      // <Track
      //   title="Inteligência Artificial"
      //   colors={['dark-pink', 'bg-light-pink']}
      //   rules={ia}
      // />
      // <Track
      //   title="Ciência de Dados"
      //   colors={['orange', 'bg-light-yellow']}
      //   rules={escience}
      // />
      // <Track
      //   title="Teoria da Computação"
      //   colors={['dark-red', 'bg-light-red']}
      //   rules={teoria}
      // />
    // </main>

      // TODONE - add bio tracks
    <main className="flex-auto">
      <Track
        title="Nucleo Básico"
        colors={['dark-green', 'bg-light-green']}
        rules={nucleobasico}
        shouldStartOpen
      />
      <Track
        title="Bacharelado Obrigatórias"
        colors={['dark-blue', 'bg-light-blue']}
        rules={bachareladoobrigatorias}
      />
      <Track
        title="Bacharelado Eletivas"
        colors={['dark-blue', 'bg-light-blue']}
        rules={bachareladoeletivas}
      />
      <Track
        title="Bacharelado Livres"
        colors={['dark-blue', 'bg-light-blue']}
        rules={bachareladolivres}
      />
      <Track
        title="Licenciatura Obrigatórias"
        colors={['dark-pink', 'bg-light-pink']}
        rules={licenciaturaobrigatorias}
      />
      <Track
        title="Licenciatura Livres"
        colors={['dark-pink', 'bg-light-pink']}
        rules={licenciaturalivres}
      />
    </main>
  )
}

export default ClassesContainer
