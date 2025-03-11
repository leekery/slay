import Card from './card.js'

export default class Deck {
  constructor() {
    this.cards = []
  }

  addCard(cardData) {
    this.cards.push(new Card(cardData))
  }
}