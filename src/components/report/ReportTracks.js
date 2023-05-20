import React from 'react'
import PropTypes from 'prop-types'
import withClasses from '../providers/withClasses'
import teoria from '../../tracks/teoria'
import sistemas from '../../tracks/sistemas'
import escience from '../../tracks/escience'
import ia from '../../tracks/ia'
// TODO  - add biotracks.js that need validation
// import bacharelado-eletivas from '../../tracks/bio/bacharelado-eletivas'
import { validateTrack } from '../../definitions/validation'

const ReportTracks = ({ doneClasses, customBoxClasses }) => {
  const validTeoria = validateTrack(teoria, doneClasses, customBoxClasses)
  const validSistemas = validateTrack(sistemas, doneClasses, customBoxClasses)
  const validEscience = validateTrack(escience, doneClasses, customBoxClasses)
  const validIa = validateTrack(ia, doneClasses, customBoxClasses)
// TODO  - add biotracks.js that need validation
  // const validBacharelado-eletivas = validateTrack(bacharelado-eletivas, doneClasses, customBoxClasses)

  return (
    <div className="f6">
      <div className="b mb2">Trilhas concluídas:</div>
      {validTeoria && <div>- Teoria da Computação</div>}
      {validSistemas && <div>- Sistemas de Software</div>}
      {validIa && <div>- Inteligência Artificial</div>}
      {validEscience && <div>- Ciência de Dados</div>}
// TODO  - add biotracks.js that need validation
      {validBacharelado-eletivas && <div>- Bacharelado Eletivas</div>}

    </div>
  )
}

ReportTracks.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
}

export default withClasses(ReportTracks)
