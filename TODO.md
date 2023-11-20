# resumo

ideal até 30-nov
OK. fazer build funcionar (testar um clone yggdrasil e build lá ver se funciona)
02. crawlers (o original e um mais simples) pra gerar json com disciplinas
03. turn github pages ON
04. validations
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


# future refactor

Tem várias coisas feitas em js desnecessariamente
tem um trecho de várias linhas que eu resolvi com um grep
deixar só o frontend em js. E deixar o projeto mais clean, com menos dependencias pro que não seja frontend


# ghpages

AJUDA
https://stackoverflow.com/questions/76122042/github-pages-enoent-no-such-file-or-directory-stat-next-build


atualmente, o github pages tá servindo a página no link https://ecdyzone.github.io/mycelium/
mas tudo estático. Sem CSS nem JS.

achei algumas soluções usando
- gh-pages -d {build,public,out}
- edit package.json deploy script with touch .nojekyll
- edit next.config.js
