import { BoxTypes } from '../definitions/constants'

export default {
  description:
    'Devem ser cursados 34 créditos-aula de disciplinas de qualquer unidade da USP e podem ser cursadas a qualquer momento da graduação, mesmo antes de abrir o núcleo avançado. As disciplinas exibidas aqui são apenas as que possuem reserva de vagas pro IB. OBS: Uma optativa eletiva/livre considerada no Bacharelado não poderá ser considerada na Licenciatura, e vice-versa.',
  boxes: {
    left: [
      {
        title: 'Botânica',
        classes: ['BIB0307', 'BIB0423', 'BIB0425', 'BIB0434', 'BIB0435', 'BIB0442', 'BIB0443', 'BIB0446', 'BIB0448', 'BIB0449', 'BIB0450', 'BIB0452', 'BIB0456', 'BIB0506'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Ecologia',
        classes: ['BIE0403', 'BIE0412', 'BIE0430', 'BIE0439', 'BIE0444', 'BIE0447', 'BIE0449', 'BIE0450', 'BIE0451', 'BIE0452', 'BIE0453', 'BIE0454', 'BIE0455'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Fisiologia',
        classes: ['BIF0309', 'BIF0421', 'BIF0440', 'BIF0441', 'BIF0442', 'BIF0445'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Genética e Biologia Evolutiva',
        classes: ['BIO0409', 'BIO0416', 'BIO0429', 'BIO0440', 'BIO0452', 'BIO0453', 'BIO0454', 'BIO0456'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
    right: [
      {
        title: 'Zoologia',
        classes: ['BIZ0411', 'BIZ0426', 'BIZ0427', 'BIZ0429', 'BIZ0433', 'BIZ0435', 'BIZ0437', 'BIZ0440', 'BIZ0446', 'BIZ0448', 'BIZ0450'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Interdepartamentais',
        classes: ['0410400', '0410401', '0410402', '0410403'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Interunidades',
        classes: ['9200001'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
      {
        title: 'Outras Unidades',
        classes: ['AGA0210', 'AGA0316', 'CBM0120', 'CBM0150', 'GMG0490', 'GMG0630', 'IEB0267', 'IOB0100', 'IOB0103', 'IOB0125', 'IOB0130', 'IOB0137', 'IOB0139', 'IOB0140', 'IOB0141', 'IOB0147', 'IOB0151', 'IOB0152', 'IOF0248', 'IOF0251', 'MAT3110', 'MZC0013', 'MZC0016', 'MZC0017'],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'others',
      },
    ],
  },
}
