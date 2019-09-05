const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('cli.js')
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});