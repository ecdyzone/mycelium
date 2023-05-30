import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';

const palettes = {
  blue: {
    primary: '#00449E',
    secondary: '#357EDD',
    tertiary: '#96CCFF',
  },
  gold: {
    primary: '#FF6300',
    secondary: '#FFB700',
    tertiary: '#FFD700',
  },
  purple: {
    primary: '#311B92',
    secondary: '#5E2CA5',
    tertiary: '#A463F2',
  },
// TODO - define green colors
  green: {
    primary: '#137752',
    secondary: '#19a974',
    tertiary: '#9eebcf',
  },
};

const ProgressCircles = ({ mandatory, mandatoryMax, elective, electiveMax, free, freeMax, palette }) => {
  const colorPalette = palette ? palettes[palette] : palettes.green;
// TODO - activate green colors
  // const colorPalette = palette ? palettes[palette] : palettes.green;

  return (
    <div className="relative w-100">
      <div>
        <CircularProgressbar
          value={mandatory}
          maxValue={mandatoryMax}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.primary,
            },
          }}
        />
      </div>
      <div className="absolute top-0 z-1" style={{ padding: '9.5%' }}>
        <CircularProgressbar
          value={elective}
          maxValue={electiveMax}
          strokeWidth={9}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.secondary,
            },
          }}
        />
      </div>
      <div className="absolute top-0 z-1" style={{ padding: '18%' }}>
        <CircularProgressbar
          value={free}
          maxValue={freeMax}
          strokeWidth={12}
          styles={{
            trail: { stroke: 'transparent' },
            path: {
              stroke: colorPalette.tertiary,
            },
          }}
        />
      </div>
    </div>
  );
};

ProgressCircles.propTypes = {
  mandatory: PropTypes.number.isRequired,
  elective: PropTypes.number.isRequired,
  free: PropTypes.number.isRequired,
  palette: PropTypes.string,
};

export default ProgressCircles;
