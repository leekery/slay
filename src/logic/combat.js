const { loadData } = require('./dataManager')
const cards = loadData('cards.json')
const enemies = loadData('enemies.json')

function startBattle(player, enemyId) {
  const enemy = enemies.find(e => e.id === enemyId)
  const battleState = {
    player,
    enemy: { ...enemy } // клонирование данных врага
  }
  return battleState
}

function performCard(battleState, cardId) {
  const card = cards.find(c => c.id === cardId)
  if (!card) return battleState

  if (card.type === 'attack') {
    battleState.enemy.maxHp -= card.damage
  } else if (card.type === 'skill' && card.block) {
    battleState.player.block = (battleState.player.block || 0) + card.block
  }
  return battleState
}

module.exports = { startBattle, performCard }
