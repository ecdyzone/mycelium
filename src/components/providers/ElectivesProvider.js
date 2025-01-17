import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import geral from '../../tracks/geral';
// TODO - add bio tracks
import nucleobasico from '../../tracks/nucleobasico';
import { ClasseTypes } from '../../definitions/constants';
import withClasses from './withClasses';

export const ElectivesContext = React.createContext();

class ElectivesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeElectives:
        /*JSON.parse(localStorage.getItem('freeElectives')) ||*/ [],
      toggleElective: this.toggleElective,
      clearElectives: this.clearElectives,
      importElectives: this.importElectives,
      exportElectives: this.exportElectives,
    };
  }

  componentDidUpdate() {
    localStorage.setItem(
      'freeElectives',
      JSON.stringify(this.state.freeElectives),
    );
  }

  clearElectives = () => {
    this.setState({ freeElectives: [] });
    localStorage.clear();
  };

  importElectives = (freeElectives) => {
    this.setState({ freeElectives });
  };

  exportElectives = () => {
    const { freeElectives } = this.state;
    return freeElectives;
  };

  toggleElective = (code) => {
    const { freeElectives } = this.state;

    this.setState({
      freeElectives: freeElectives.includes(code)
        ? freeElectives.filter((electives) => electives !== code)
        : [...freeElectives, code],
    });
  };

  render() {
    const { children, customBoxClasses } = this.props;
    // const allGeneral = [...geral.boxes.left, ...geral.boxes.right];
    // TODO - add bio tracks
    const allGeneral = [...nucleobasico.boxes.center, ...nucleobasico.boxes.left, ...nucleobasico.boxes.right];
    const mandatoryClasses = allGeneral.find(
      (box) => box.classeType === ClasseTypes.MANDATORY,
    ).classes;

    const ctx = {
      ...this.state,
      mandatoryClasses,
    };

    return (
      <ElectivesContext.Provider value={ctx}>
        {children}
      </ElectivesContext.Provider>
    );
  }
}

ElectivesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  customBoxClasses: PropTypes.object.isRequired,
};

export default withClasses(ElectivesProvider);
