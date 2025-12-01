const fs = require('fs');
const path = require('path');

function cleanDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const hasSpace = file.includes(' ');
    const hasApostrophe = file.includes("'");
    const hasAccent = /[éèêëàâäôöùûüçñ]/i.test(file);

    if (hasSpace || hasApostrophe || hasAccent) {
      const fullPath = path.join(dir, file);
      console.log(`Deleting problematic file: ${file}`);
      try {
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Failed to delete ${file}:`, err.message);
      }
    }
  });
}

cleanDirectory('./public');
cleanDirectory('./dist');

console.log('Filename cleanup complete');
