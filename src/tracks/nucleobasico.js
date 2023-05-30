import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    'O núcleo básico consiste em 29 disciplinas obrigatórias que somam 122 créditos-aula e 22 créditos-trabalho. A partir de 96 créditos-aula cumpridos, é possível abrir o núcleo avançado',
  boxes: {
    left: [
      {
        title: 'Obrigatórias',
        classeType: ClasseTypes.MANDATORY,
        classes: [
          '0410107',
          '0410109',
          '0410113',
          '0410117',
          '0440621',
          'BIB0143',
          'BIO0203',
          'MAE0116',
          '0411206',
          '4310190',
          'BIB0142',
          'BIO0206',
          'BMC0133',
          'QBQ0230',
          'BIB0145',
          'BIE0213',
          'BIF0214',
          'BIF0217',
          'BIO0205',
          'BIO0207',
          'BIZ0213',
          'BIB0124',
          'BIE0214',
          'BIF0215',
          'BIF0216',
          'BIO0208',
          'BIZ0212',
          'BMI0296',
          'BMM0290',
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
    right: [
    ],
  },
};
