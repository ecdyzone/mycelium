import { BoxTypes } from '../definitions/constants'

export default {
  description:
    'Dentro do grupo de disciplinas de Psicologia da Educação (4.1) os alunos devem cursar uma única disciplina , que é considerada pelo IB como obrigatória e pela FE como optativa eletiva',
  boxes: {
    left: [
      {
        title: 'Oferecidas pela FE',
        classes: ['EDA0463', 'EDM0400', 'EDM0402', 'EDM0433', 'EDM0434'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'FE - Psicologia da Educação',
        classes: ['EDF0290', 'EDF0292', 'EDF0296', 'EDF0298'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
    right: [
      {
        title: 'Oferecidas pelo IB',
        classes: ['0410200', '0410517', '0410514'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Oferecida pela Faculdade de Saúde Pública',
        classes: ['HEP0142'],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
  },
}
