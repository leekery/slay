const { loadData } = require('./dataManager')
const events = loadData('events.json')

// Выбор случайного события
function getRandomEvent() {
  return events[Math.floor(Math.random() * events.length)]
}

// Обработка выбранного варианта события
// gameState – текущее состояние игры (например, список реликвий, золото и пр.)
function processEvent(event, optionIndex, gameState) {
  const selectedOption = event.options[optionIndex]
  
  if (selectedOption.outcome === 'получить_реликвию') {
    if (!gameState.relics) gameState.relics = []
    gameState.relics.push(selectedOption.relicId)
  }
  // Можно добавить обработку других исходов (например, изменение золота, наложение дебаффа и т.д.)
  
  return gameState
}

module.exports = { getRandomEvent, processEvent }
