import { BoxTypes, ClasseTypes } from '../definitions/constants';

export default {
  description:
    'Pesquisa em Biologia.',
  boxes: {
    left: [
      {
        title: 'Obrigatórias',
        // classeType: ClasseTypes.MANDATORY,
        classes: [
          '0410513',
        ],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
  },
};
