import React from 'react'
import PropTypes from 'prop-types'
import withClasses from '../providers/withClasses'
import nucleobasico from '../../tracks/nucleobasico'
import bachareladoobrigatorias from '../../tracks/bachareladoobrigatorias'
import bachareladoeletivas from '../../tracks/bachareladoeletivas'
import bachareladolivres from '../../tracks/bachareladolivres'
import licenciaturaobrigatorias from '../../tracks/licenciaturaobrigatorias'
import licenciaturalivres from '../../tracks/licenciaturalivres'
import { validateTrack } from '../../definitions/validation'

const ReportTracks = ({ doneClasses, customBoxClasses }) => {
  const validNucleobasico = validateTrack(nucleobasico, doneClasses, customBoxClasses)
  const validBachareladoobrigatorias = validateTrack(bachareladoobrigatorias, doneClasses, customBoxClasses)
  const validBachareladoeletivas = validateTrack(bachareladoeletivas, doneClasses, customBoxClasses)
  const validBachareladolivres = validateTrack(bachareladolivres, doneClasses, customBoxClasses)
  const validLicenciaturaobrigatorias = validateTrack(licenciaturaobrigatorias, doneClasses, customBoxClasses)
  const validLicenciaturalivres = validateTrack(licenciaturalivres, doneClasses, customBoxClasses)

  return (
    <div className="f6">
      <div className="b mb2">Trilhas concluídas:</div>
      {validNucleobasico && <div>- Núcleo Básico</div>}
      {validBachareladoobrigatorias && <div>- Bacharelado Obrigatórias</div>}
      {validBachareladoeletivas && <div>- Bacharelado Eletivas</div>}
      {validBachareladolivres && <div>- Bacharelado Livres</div>}
      {validLicenciaturaobrigatorias && <div>- Licenciatura Obrigatórias</div>}
      {validLicenciaturalivres && <div>- Licenciatura Livres</div>}
    </div>
  )
}

ReportTracks.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
}

export default withClasses(ReportTracks)
