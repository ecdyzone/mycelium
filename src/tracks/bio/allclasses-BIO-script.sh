

 grep -E '[0-9]{4}' todas.md




 grep -E '[0-9]{4}' todas.md | grep -E '[0-9]\.[0-9]'



montar um tsv e depois converter em json

grep -E '[0-9]{4}' todas.md | wc -l

164 disciplinas
preciso refazer as obrigatórias, que não tão certinhas, tem só o código


codes
grep -E '[[:alnum:]]{3}[0-9]{4}' todas.md
grep -E '[[:alnum:]]{3} [0-9]{4}' todas.md

titles
grep -E ') .*\(' todas.md | cut -d ')' -f 2 | cut -d '(' -f 1 | tr -s ' '

credits
grep -E '[0-9]{4}' todas.md | grep -E '[0-9]\.[0-9]' -wo | cut -d '.' -f 1

wcredits
grep -E '[0-9]{4}' todas.md | grep -E '[0-9]\.[0-9]' -wo | cut -d '.' -f 2

description
(get from pdf or jupitercrawl)

bibliography
(get from pdf or jupitercrawl)




when it's over

mv $file ../../definitions/allclasses-BIO.md
