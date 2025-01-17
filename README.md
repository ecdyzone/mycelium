# Mycelium

> O Mycelium é um fork do Yggdrasil, apenas adaptado para diferentes disciplinas.

O Mycelium é um sistema não-oficial para gerenciamento da graduação do aluno do IB-USP, contendo informações das disciplinas obrigatórias, optativas eletivas e optativas livres do bacharelado e da licenciatura.

Ele também gera o relatório de provável formando, ao se completarem os créditos necessários.

## Como contribuir

### Rodando localmente

Basta clonar o repositório, instalar as dependências com `npm install` e depois ligar o servidor com `npm start`. Você precisa ter o Node.js instalado para que esses comandos funcionem. Depois disso, basta entrar em `localhost:3000` no seu browser.

A versão ideal do Node.js para rodar os comandos é a v21.2.0. Utilize o utilitário `nvm` para trocar facilmente entre versões.

Exemplo de script:
```bash
git clone http://github.com/ecdyzone/mycelium mycelium
cd mycelium
node -v && npm -v      # garanta que nodejs e npm estejam instalados
nvm -v                 # nvm é opcional
nvm use v21.2.0
npm install
npm run build
npm start
firefox localhost:3000
```


### Modificar trilhas

Caso alguma matéria seja incluída ou retirada de uma trilha, ou mude algum outro requisito (tipo número mínimo de matérias de um bloco), basta acessar o arquivo de configuração da trilha desejada dentro da pasta `/tracks` e fazer as mudanças desejadas. As configurações são bastante intuitivas.

Após as mudanças, é necessário refazer o deploy do projeto.

### Adicionar matérias novas

Caso alguma matéria nova seja adicionada ao sistema, após adicioná-la no arquivo da trilha relacionada, é preciso rodar de novo o crawler que busca as informações dela no Jupiter (mais detalhes abaixo). Além disso, ela precisa de um ícone, então você deve fuçar em sites de Ragnarok, procurar as listas de habilidades de cada classe, encontrar algum ícone de habilidade que ache legal e salvar na pasta `/public/skills` com o nome sendo o código da matéria e a extensão `.gif`.

### Crawler

O arquivo `jupiterCrawl.js` é um crawler que irá carregar todas as matérias que fazem parte das trilhas (inclusive as obrigatórias) e buscará informações sobre elas no Jupiter: nome, créditos, ementa e pré-requisitos. Essas informações são salvas em um arquivo `allclasses.json` que é usado pelo sistema. Esse crawler deve ser rodado (`npm run crawler`) sempre que uma nova matéria é adicionada ao Mycelium, e também idealmente a cada começo de semestre para pegar updates que acontecem nas matérias ao longo do ano.

O crawler demora um pouco pra rodar e gasta bastante CPU. Após usá-lo, é necessário refazer o deploy do projeto.

### Enviando modificações

Para fazer qualquer modificação nas trilhas ou matérias, realize um fork do projeto no GitHub, modifique como quiser e abra um PR (pull request) para o repositório principal do Mycelium. Caso o PR seja aprovado, as mudanças serão incorporadas no site.
