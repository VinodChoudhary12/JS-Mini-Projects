const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Kripaya Apna Name darj kre?`, name => {
    console.log(`Hii  ${name}!`);

    readline.close();
  });
  