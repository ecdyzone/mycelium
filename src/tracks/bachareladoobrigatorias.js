import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    'A única disciplina obrigatória do bacharelado é Pesquisa em Biologia, que possui 4 créditos-aula e 10 créditos-trabalho.',
  boxes: {
    left: [
      {
        title: 'Obrigatórias',
        classes: [
          '0410513',
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
    right: [
    ],
  },
};
