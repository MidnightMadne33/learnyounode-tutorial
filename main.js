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

// var fs = require('fs');
// var path = require('path');
// var ext = '.' + process.argv[3];
// var fileListExt = [];
// fs.readdir(process.argv[2], function(err, list){
//   if(!err){
//     list.forEach(file => {
//       if(path.extname(file) === ext){
//         fileListExt.push(file);
//       }
//     });
//     fileListExt.forEach(file => {
//       console.log(file);
//     });
//   }
// });

/*  ********************************************* */

//Exercise 6

// var mod = require('./moduleA');

// mod(process.argv[2], process.argv[3], function(err, list){
//     if(err){
//       return console.error('Error : ', err);
//     }
//     list.forEach(file => {
//       console.log(file);
//     });
//   }
// );

/*  ********************************************* */

//Exercise 7

// var http = require('http');
// const url = process.argv[2];

// http.get(url, function(response){
//   response.setEncoding('utf8').on("data", console.log)
//     .on("error", console.error);
// });

/*  ********************************************* */

//Exercise 8

// var concat = require('concat-stream');
// var http = require('http');
// const url = process.argv[2];

// http.get(url, (response) => {
//   response.pipe(concat((data) => {
//     console.log(data.length);
//     console.log(data.toString());
//   }));
// });

/*  ********************************************* */

//Exercise 9

// var http = require('http');
// var bl = require('bl');
// const url = process.argv.slice(2,);

// http.get(url[0], response => {
//   response.pipe(bl((err, data) => {
//     if(err){
//       return console.error('Error : ', err);
//     }
//     console.log(data.toString());
//     http.get(url[1], response => {
//       response.pipe(bl((err, data) => {
//         if(err){
//           return console.error('Error : ', err);
//         }
//         console.log(data.toString());
//         http.get(url[2], response => {
//           response.pipe(bl((err, data) => {
//             if(err){
//               return console.error('Error : ', err);
//             }
//             console.log(data.toString());
//           }))
//         })
//       }))
//     })
//   }))
// })

/*  ********************************************* */

//Exercise 10

// var net = require('net');

// var server = net.createServer((socket) => {
//   var date = new Date();
//   var str = '';
//   str += date.getFullYear()
//     + '-' + ('0'+(date.getMonth() + 1)).slice(-2) 
//     + '-' + ('0' + date.getDate()).slice(-2)
//     + ' ' + ('0' + date.getHours()).slice(-2)  
//     + ':' + ('0' + date.getMinutes()).slice(-2) + '\n';
//   socket.write(str);
//   socket.end();
// })

// server.listen(process.argv[2]);

/*  ********************************************* */

//Exercise 11

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type' : 'text/plain'});
  fs.createReadStream(process.argv[3], {encoding:'utf8'}).pipe(res);
});
server.listen(Number(process.argv[2]));