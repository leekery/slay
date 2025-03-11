const { startBattle, performCard } = require('./combat')

const player = { hp: 50, block: 0 }
let battle = startBattle(player, 'slime_basic')
console.log('Начало боя:', battle)

battle = performCard(battle, 'strike')
console.log('После розыгрыша карты "Удар":', battle)

battle = performCard(battle, 'defend')
console.log('После розыгрыша карты "Защита":', battle)
