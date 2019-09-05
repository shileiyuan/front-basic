const fs = require('fs')

// console.log(fs.constants)

fs.appendFile('abc.txt', 'data to append', (err) => {
  if (err) throw err;
console.log('The "data to append" was appended to file!');
});