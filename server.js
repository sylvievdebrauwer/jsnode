const fs = require("fs");
const path = require("path");

const htmlContent = '<h1>Index<h1>';
const cssContent = 'body { background-color: #ded4b8; }';

// check if clients folder exists
const existingClientsFolder = fs.existsSync(path.join(__dirname, "clients"));

if (!existingClientsFolder) {
  // Create the clients folder if it doesn't exist
  try {
    fs.mkdirSync(path.join(__dirname, "clients"));
    console.log("Created clients folder");
  } catch (err) {
    console.error("Error creating clients folder:", err.message);
  }
}

try {
    const indexPath = path.join(__dirname,"clients", "index.html");
    const stylePath = path.join(__dirname,"clients", "style.css");

    fs.writeFileSync(indexPath, htmlContent);
    fs.writeFileSync(stylePath, cssContent);
    fs.appendFileSync(indexPath, '<link rel="stylesheet" href="style.css"></link>');
    console.log(path.basename(__filename));

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
  }



try {
    fs.mkdirSync(path.join(__dirname, "clients/contact"));

} catch (err) {
    console.error("Error code:", err.code);
    console.error(err.message);
}

try {
    fs.mkdirSync(path.join(__dirname, "clients/about"));

} catch (err) {
    console.error("Error code:", err.code);
    console.error(err.message);
}

try {
    fs.mkdirSync(path.join(__dirname, "clients/blog"));

} catch (err) {
    console.error("Error code:", err.code);
    console.error(err.message);
}

function createContactPage() {
    const indexPath = path.join(__dirname, "clients/contact/index.html");
    const stylePath = path.join(__dirname, "clients/contact/style.css");
    const htmlContent = '<h1>Contact</h1>';
    const cssContent = 'body {background-color: #f5f2ef; }';

    try {
        fs.writeFileSync(indexPath, htmlContent);
        fs.writeFileSync(stylePath, cssContent);
        fs.appendFileSync(indexPath, '<link rel="stylesheet" href=style.css></link>');
        console.log(path.basename(__filename));
    }
    catch (err) {
        console.error(err.code);
        console.error(err.message);
      }
}

