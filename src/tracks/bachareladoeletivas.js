import { BoxTypes } from '../definitions/constants'

export default {
  description:
    '20 creditos-aula. É possível cursar as disciplinas eletivas contando créditos de optativas livres.',
  boxes: {
    left: [
      {
        title: 'Botânica',
        classes: ['BIB0306', 'BIB0311', 'BIB0313', 'BIB0315'],
        type: BoxTypes.FREE,
      },
      {
        title: 'Ecologia',
        classes: ['BIE0315', 'BIE0317', 'BIE0320', 'BIE0322'],
        type: BoxTypes.FREE,
      },
      {
        title: 'Fisiologia',
        classes: ['BIF0303', 'BIF0304'],
        type: BoxTypes.FREE,
      },
    ],
    right: [
      {
        title: 'Genética e Biologia Evolutiva: ',
        classes: ['BIO0300', 'BIO0307', 'BIO0309', 'BIO0312', 'BIO0313'],
        type: BoxTypes.FREE,
      },
      {
        title: 'Zoologia',
        classes: ['BIZ0302', 'BIZ0303', 'BIZ0305'],
        type: BoxTypes.FREE,
      },
      {
        title: 'Interdepartamental',
        classes: ['0410301'],
        type: BoxTypes.FREE,
      },
    ],
  },
}
