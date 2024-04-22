const { glob } = require('glob');
const fs = require('fs').promises;

const removeFile = async (pathToRemove, notRemove) => {
  await glob(pathToRemove).then((paths) => {
    paths.forEach(async (path) => {
      if (path !== notRemove) {
        await fs.unlink(path);
      };
    });
  });
}

module.exports = removeFile;