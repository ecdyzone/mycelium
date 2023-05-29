import { Component } from 'react'
import PropTypes from 'prop-types'
import withElectives from '../providers/withElectives'
import withClasses from '../providers/withClasses'

class CreditsManager extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  mapCredits = array => {
    const { allClasses } = this.props
    return array
      .map(code => allClasses.find(classe => classe.code === code))
      .reduce(
        (acc, cur) =>
          cur ? acc + parseInt(cur.credits) + parseInt(cur.wcredits) : acc,
        0
      )
  }

  pickCandidate = classes => {
    const { allClasses, doneClasses } = this.props
    const candidate = doneClasses
      .filter(code => classes.includes(code))
      .map(code => {
        const classe = allClasses.find(classe => classe.code === code)
        return classe
          ? [code, parseInt(classe.credits) + parseInt(classe.wcredits)]
          : undefined
      })
      .reduce(
        (acc, cur) =>
          cur
            ? acc.length > 0
              ? acc[1] > cur[1] && cur[1] >= 4
                ? cur
                : acc
              : cur
            : acc,
        []
      )

    return candidate.length > 0 ? candidate[0] : undefined
  }

  render() {
    const {
      doneClasses,
      mandatoryClasses,
      freeElectives,
      children,
    } = this.props


    const mandatoryDone = doneClasses.filter(code =>
      mandatoryClasses.includes(code)
    )
    const mandatoryCredits = this.mapCredits(mandatoryDone)

    const freeDone = doneClasses.filter(
      code =>
        freeElectives.includes(code)
    )
    const freeCredits = this.mapCredits(freeDone)

    const electiveDone = doneClasses.filter(
      code =>
        !freeElectives.includes(code) &&
        !mandatoryClasses.includes(code)
    )
    const electiveCredits = this.mapCredits(electiveDone)

    return children({
      mandatoryDone,
      mandatoryCredits,
      electiveDone,
      electiveCredits,
      freeDone,
      freeCredits,
    })
  }
}

CreditsManager.propTypes = {
  doneClasses: PropTypes.array.isRequired,
  mandatoryClasses: PropTypes.array.isRequired,
  freeElectives: PropTypes.array.isRequired,
  allClasses: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
}

export default withClasses(withElectives(CreditsManager))
