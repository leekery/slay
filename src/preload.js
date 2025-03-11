const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

window.api = {
  loadJSON: (relativePath) => {
    const fullPath = path.join(__dirname, relativePath);
    return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  }
};

window.addEventListener('DOMContentLoaded', () => {
  // Дополнительная инициализация, если потребуется
});