const { getRandomEvent, processEvent } = require('./eventManager')

// Симуляция игрового состояния
let gameState = { relics: [] }

const event = getRandomEvent()
console.log('Выбрано событие:', event.title)
console.log('Варианты:')
event.options.forEach((option, index) => {
  console.log(`${index}: ${option.text}`)
})

// Для теста выбираем первый вариант
gameState = processEvent(event, 0, gameState)
console.log('Состояние игры после выбора варианта:', gameState)
