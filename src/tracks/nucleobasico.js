import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    '29 disciplinas | 122 creditos aula | 22 creditos trabalho.',
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
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
    right: [
      {
        title: 'Obrigatórias2',
        classeType: ClasseTypes.MANDATORY,
        classes: [
          'BIO0207',
          'BIZ0213',
          'BIB0124',
          'BIE0214',
          'BIF0215',
          'BIF0216',
        ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
      {
        title: 'Optativa de Ciências',
        classeType: ClasseTypes.MANDATORY,
        classes: [
          'BIO0208',
          'BIZ0212',
          'BMI0296',
          'BMM0290',
        ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
        addable: true,
        addingId: 'ciencias',
        addingInfo:
          'Para utilizar uma matéria fora da lista como Optativa de Ciências, você deve fazer um requerimento especial. O formulário pode ser encontrado no site do Apoio ao BCC.',
      },
    ],
  },
};
