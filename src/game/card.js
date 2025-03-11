export default class Card {
  constructor({ id, name, cost, type, description }) {
    this.id = id
    this.name = name
    this.cost = cost
    this.type = type // "attack", "skill", ...
    this.description = description
  }
}
