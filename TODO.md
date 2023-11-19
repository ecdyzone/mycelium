# resumo

ideal até 30-nov
1. fazer build funcionar (testar um clone yggdrasil e build lá ver se funciona)
2. crawlers (o original e um mais simples) pra gerar json com disciplinas
3. turn github pages ON
4. validations
    - checkboxes eletivas e livres (estão sempre ON, mudar isso)
    - credits counting (triggers some actions)

se der problema, pedir ajudar. Mandar email e etc

v2
1. matrusp integration


# crawler

```bash
nvm run v21.2.0 jupiterCrawl.js
```

rodou pra um arquivo
agora preciso gerar o json a partir de uma lista de vários arquivos. Talvez gerada via bash seja mais fácil


TOADD: rate limiting and caching
https://proxiesapi.com/articles/the-ultimate-cheerio-web-scraping-cheat-sheet


TODO: fazer um crawer mais leve, que use majoritariamente essa página da grade do IB, mesmo que fique sem summary por enquanto. Pro que quero, não tem porque sobrecarregar os servidores. Deixo isso pra complementar caso alguma disciplina fique faltando. Nessa página tem até as dependências, tudo certinho.
https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=41&codcur=41012&codhab=200&tipo=N
    - materias e requisitos tem tags e classes bem diferentes, é facil diferenciar

dá pra adicionar meus próprios shell scripts no package.json. e ai rodo com 'npm run comando'


# testing versions and commits to get build done


git checkout v0.1.0

rm node_modules .husky .next package-lock.json
npm cache clean --force

nvm install v8
nvm alias default v8.17.0
npm install

npm audit fix


# future refactor

Tem várias coisas feitas em js desnecessariamente
tem um trecho de várias linhas que eu resolvi com um grep
deixar só o frontend em js. E deixar o projeto mais clean, com menos dependencias pro que não seja frontend
