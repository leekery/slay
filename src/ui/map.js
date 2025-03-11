const { generateMap } = require('../logic/mapGenerator')

const mapContainer = document.getElementById('map')
const levelCount = 10
const map = generateMap(levelCount)

// Очистка контейнера и вывод узлов карты
mapContainer.innerHTML = ''
map.forEach(node => {
  const nodeElem = document.createElement('div')
  nodeElem.className = 'node'
  nodeElem.textContent = `Уровень ${node.level}: ${node.type}`
  // Добавляем временную текстуру-заглушку для каждого узла
  // Описание для дизайнера:
  // "Узел с типом '<тип узла>' – простая иконка, стилизованная под минималистичный дизайн,
  // фон узла нейтрального серого цвета с небольшими тенями."
  mapContainer.appendChild(nodeElem)
})
