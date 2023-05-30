import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressCircles from './ProgressCircles'

class CreditsProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      mandatoryCredits,
      electiveCredits,
      freeCredits,
      colors,
    } = this.props

    const primaryColor = colors ? colors.primary : 'dark-green'
    const secondaryColor = colors ? colors.secondary : 'green'
    const tertiaryColor = colors ? colors.tertiary : 'light-green'

    return (
      <div className="flex items-center">
        <div className="w-40 w4-m w-40-l mr3">
          <ProgressCircles
            mandatory={mandatoryCredits}
            mandatoryMax={122}
            elective={electiveCredits}
            electiveMax={20}
            free={freeCredits}
            freeMax={54}
            palette={colors && colors.secondary}
          />
        </div>
        <div className="flex flex-column">
          <span className={`fw6 ${primaryColor}`}>Núcleo Básico</span>
          <span className="fw5 silver mb2">
            <span className="mr1">{mandatoryCredits}</span>/
            <span className={`${primaryColor} ml1`}>122</span>
          </span>
          <span className={`fw6 ${secondaryColor}`}>Eletivas</span>
          <span className="fw5 silver mb2">
            <span className="mr1">{electiveCredits}</span>/
            <span className={`${secondaryColor} ml1`}>20</span>
          </span>
          <span className={`fw6 ${tertiaryColor}`}>Livres</span>
          <span className="fw5 silver mb2">
            <span className="mr1">{freeCredits}</span>/
            <span className={`${tertiaryColor} ml1`}>54</span>
          </span>
        </div>
      </div>
    )
  }
}
CreditsProgress.propTypes = {
  mandatoryCredits: PropTypes.number.isRequired,
  electiveCredits: PropTypes.number.isRequired,
  freeCredits: PropTypes.number.isRequired,
  colors: PropTypes.object,
}

export default CreditsProgress
