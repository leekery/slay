export function drawCard() {
  const cardsData = window.api.loadJSON('../data/cards.json');
  const basicDeck = cardsData.basicDeck;
  const card = basicDeck[Math.floor(Math.random() * basicDeck.length)];
  console.log('Взята карта:', card.name);
  return card;
}