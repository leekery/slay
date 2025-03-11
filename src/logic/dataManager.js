const fs = require('fs')
const path = require('path')

function loadData(fileName) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../data', fileName), 'utf-8'))
}

module.exports = { loadData }
