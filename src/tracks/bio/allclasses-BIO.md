jupiterCrawl is not needed for testing purposes
grep -E '[0-9]{4}' todas.md | grep -E '[0-9]\.[0-9]'

I can make a script that takes everything from projetopedagogico.pdf

including ementa + bibliografia

a única falta seriam as dependencias
pra isso eu teria que rodar o código.

mas agora preciso achar um pdf2txt que não ignore os espaços em branco, como o pdftotext vem fazendo. Talvez algo python. O tabular, ou o que usei no passado nos jupyter-notebook? tesseract


# json example

```json
[
    {
        "code": "MAC0101",
        "name": "Integração na Universidade e na Profissão",
        "credits": "2",
        "wcredits": "0",
        "summary": "Durante o semestre os ingressantes assistirão palestras de alunos veteranos e ex-alunos do BCC, além de alguns convidados. Nas palestras os veteranos compartilharão com os calouros as suas experiências do dia a dia como alunos do BCC. Os veteranos apresentarão os seus grupos extracurriculares de interesse, estudo e pesquisa e suas atividades em comunidade. Espera-se que os ex-alunos descrevam um pouco da sua experiência pessoal como alunos do BCC e profissionais de computação, além de alguma perspectiva na área. Várias palestras podem ser de interesse de estudantes de outros cursos além do BCC.",
        "dependencies": []
    },
    {
        "code": "MAT0349",
        "name": "Introdução à Lógica",
        "credits": "4",
        "wcredits": "0",
        "summary": "Breve digressão histórica. Cálculo proposicional. Fórmulas tautológicas, contra-válidas e     indeterminadas. Redução do número de conectivos. Problema de Post. Álgebra dos interruptores. Argumentos     válidos. Teorema da dedução. Axiomatização do cálculo proposicional. Cálculo de predicados. Quantificadores.     Fórmulas. Argumentos. Axiomatização do cálculo de predicados de 1 ordem. Noção sobre teorias formalizadas.",
        "dependencies": []
    }
]
```
