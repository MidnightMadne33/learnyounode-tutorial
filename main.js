//Exercise 1

// console.log('HELLO WORLD');

/*  ********************************************* */

//Exercise 2

// var sum = 0;
// for (let index = 2; index < process.argv.length; index++) {
//   sum += Number(process.argv[index])
// }
// console.log(sum);

/*  ********************************************* */

//Exercise 3

// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var res = buf.toString().split('\n').length - 1;
// console.log(res);

/*  ********************************************* */

//Exercise 4

// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, buff){
//   if(!err){
//     var count = buff.toString().split('\n').length - 1;
//     console.log(count);
//   }
// })

/*  ********************************************* */

//Exercise 5

var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
var fileListExt = [];
fs.readdir(process.argv[2], function(err, list){
  if(!err){
    list.forEach(file => {
      if(path.extname(file) === ext){
        fileListExt.push(file);
      }
    });
    fileListExt.forEach(file => {
      console.log(file);
    });
  }
});
