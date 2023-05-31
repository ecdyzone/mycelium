import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import withClasses from '../providers/withClasses'
import nucleobasico from '../../tracks/nucleobasico'
import bachareladoobrigatorias from '../../tracks/bachareladoobrigatorias'
import bachareladoeletivas from '../../tracks/bachareladoeletivas'
import bachareladolivres from '../../tracks/bachareladolivres'
import licenciaturaobrigatorias from '../../tracks/licenciaturaobrigatorias'
import licenciaturalivres from '../../tracks/licenciaturalivres'
import { validateTrack } from '../../definitions/validation'

const TrackStatus = ({ doneClasses, customBoxClasses }) => {
  const validNucleobasico = validateTrack(nucleobasico, doneClasses, customBoxClasses)
  const validBachareladoobrigatorias = validateTrack(bachareladoobrigatorias, doneClasses, customBoxClasses)
  const validBachareladoeletivas = validateTrack(bachareladoeletivas, doneClasses, customBoxClasses)
  const validBachareladolivres = validateTrack(bachareladolivres, doneClasses, customBoxClasses)
  const validLicenciaturaobrigatorias = validateTrack(licenciaturaobrigatorias, doneClasses, customBoxClasses)
  const validLicenciaturalivres = validateTrack(licenciaturalivres, doneClasses, customBoxClasses)

  return (
    <React.Fragment>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validNucleobasico ? 'green' : 'white'} f4 mr2`}
        />
        <span className={validNucleobasico ? 'near-black' : 'moon-gray'}>
          Núcleo Básico
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validBachareladoobrigatorias ? 'blue' : 'white'} f4 mr2`}
        />
        <span className={validBachareladoobrigatorias ? 'near-black' : 'moon-gray'}>
          Bacharelado Obrigatórias
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validBachareladoeletivas ? 'blue' : 'white'} f4 mr2`}
        />
        <span className={validBachareladoeletivas ? 'near-black' : 'moon-gray'}>
          Bacharelado Eletivas
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validBachareladolivres ? 'blue' : 'white'} f4 mr2`}
        />
        <span className={validBachareladolivres ? 'near-black' : 'moon-gray'}>
          Bacharelado Livres 
        </span>
      </div>
      <div className="flex items-center mb2 fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validLicenciaturaobrigatorias ? 'hot-pink' : 'white'} f4 mr2`}
        />
        <span className={validLicenciaturaobrigatorias ? 'near-black' : 'moon-gray'}>
          Licenciatura Obrigatórias
        </span>
      </div>
      <div className="flex items-center fw5">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`${validLicenciaturalivres ? 'hot-pink' : 'white'} f4 mr2`}
        />
        <span className={validLicenciaturalivres ? 'near-black' : 'moon-gray'}>
          Licenciatura Livres
        </span>
      </div>
    </React.Fragment>
  )
}

TrackStatus.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
}

export default withClasses(TrackStatus)
