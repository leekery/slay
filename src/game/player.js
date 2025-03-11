import Deck from './deck.js'

export default class Player {
  constructor(name, maxHP) {
    this.name = name
    this.maxHP = maxHP
    this.currentHP = maxHP
    this.deck = new Deck()
  }
}