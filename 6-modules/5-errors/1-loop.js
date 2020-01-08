const path = require('path');
const fs = require('fs');

const files = ['.gitignore'];

files.forEach(file => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
