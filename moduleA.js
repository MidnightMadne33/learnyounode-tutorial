//Exercise 6

var fs = require('fs');
var path = require('path');

findFiles = (dirName, fileExt, callback) => {
  var ext = '.' + fileExt;
  var fileListExt = [];
  fs.readdir(dirName, function(err, list){
      if(err){
        return callback(err);
      }
      list.forEach(file => {
        if(path.extname(file) === ext){
          fileListExt.push(file);
        }
      });
      callback(null, fileListExt);
    });
}

module.exports = findFiles;