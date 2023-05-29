import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    'minimo de 20 creditos aula.',
  boxes: {
    left: [
      {
        title: 'Oferecidas pela FE',
        classes: [
          'EDA0690',
          'EDF0285',
          'EDF0287',
          'EDF0289',
        ],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
    right: [
      {
        title: 'Oferecidas pelo IB',
        classes: [
          '0410111',
          '0410404',
          '0410405',
          'BIB0317',
          'BIB0451',
          'BIB0443',
          'BIB0450',
          'BIE0319',
          'BIE0403',
          'BIF0443',
          'BIF0444',
          'BIO0410',
          'BIO0441',
          'BIO0455',
          'BIZ0307',
          'BIZ0439',
          'BIZ0445',
        ],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
  },
};
