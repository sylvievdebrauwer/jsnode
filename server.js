const fs = require('fs');
const path = require("path");

const htmlContent = '<h1>Index<h1>';
const cssContent = 'body { background-color: #ded4b8; }';

try {
    const indexPath = path.join(__dirname, "index.html");
    const stylePath = path.join(__dirname, 'style.css');

    fs.writeFileSync(indexPath, htmlContent);
    fs.writeFileSync(stylePath, cssContent);

    fs.appendFileSync(indexPath, '<link rel="stylesheet" href="style.css"></link>');
    console.log(path.basename(__filename));

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }
