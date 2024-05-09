const fs = require('fs');
const path = require('path');

const registry = [];
const providersDir = path.join(__dirname, 'providers');
const files = fs.readdirSync(providersDir);

for (const file of files) {
  if (path.extname(file) !== '.json') continue;

  const filePath = path.join(providersDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  try {
    const jsonContent = JSON.parse(fileContent);
    registry.push(jsonContent);
  } catch (error) {
    console.error(`Error parsing ${file}:`, error);
    console.error('File content:', fileContent);
  }
  console.log(`Validate ${file}`);
}

fs.writeFileSync(path.join(__dirname, 'registry.json'), JSON.stringify(registry));