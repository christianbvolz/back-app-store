const { glob } = require('glob');
const fs = require('fs');

const removeFile = async (pathToRemove, notRemove) => {
  await glob(pathToRemove).then((paths) => {
    paths.forEach((path) => {
      if (path !== notRemove) {
        fs.unlink(path, function (err) {
          if (err) throw err;
          console.log(path, ' File deleted!');
        });
      };
    });
  });
}

module.exports = removeFile;