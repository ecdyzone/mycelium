import { BoxTypes } from '../definitions/constants'

export default {
  description:
    'Devem ser cursadas 9 disciplinas, que totalizam 34 créditos-aula e 16 créditos-trabalho. Dentro do grupo de disciplinas de Psicologia da Educação os alunos devem cursar uma única disciplina, que é considerada pelo IB como obrigatória e pela FE como optativa eletiva. OBS: No documento do Projeto Pedagógico 2021 existe a disciplina 0410200 (ATPEB), mas parece que a partir de 2022 as regras sobre isso mudaram (É algo a ser checado e atualizado no Mycelium).',
  boxes: {
    center: [],
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
        classes: ['0410517', '0410514'],
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
