//Exercise 1

/*
console.log('HELLO WORLD');
*/

/*  ********************************************* */

//Exercise 2

/*
var sum = 0;
for (let index = 2; index < process.argv.length; index++) {
  sum += Number(process.argv[index])
}
console.log(sum);
*/

/*  ********************************************* */

//Exercise 3

var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var res = buf.toString().split('\n').length - 1;
console.log(res);