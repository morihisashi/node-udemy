const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist/text.txt');
console.log(distPath);
// console.log(__dirname + '../dist/test.txt');

fs.writeFileSync(distPath, 'hello, node.js');