nvm run v21.2.0 jupiterCrawl.js



grep -E '[[:alnum:]]{3}[0-9]{4}' src/tracks/*.js -wo | grep -v 0410200 > src/tracks/allclasses.txt
