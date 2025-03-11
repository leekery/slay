import Player from './player.js'

export default class Game {
  constructor() {
    this.player = null
    // тут менеджеры врагов, события, UI и т.п.
  }

  init() {
    this.player = new Player("Герой", 80)
    console.log("Игра инициализирована, у игрока HP:", this.player.currentHP)
  }
}