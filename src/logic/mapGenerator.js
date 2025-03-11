// Генерация карты уровня
const nodeTypes = ['battle', 'elite', 'shop', 'event', 'rest']

function generateMap(levelCount) {
  const map = []
  for (let i = 0; i < levelCount; i++) {
    // случайный выбор типа узла
    const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)]
    map.push({ level: i + 1, type })
  }
  // последний узел назначаем боссом
  map[levelCount - 1].type = 'boss'
  return map
}

module.exports = { generateMap }
