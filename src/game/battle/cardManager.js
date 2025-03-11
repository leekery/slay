import cardsData from '../../data/cards.json';

export function drawCard() {
  // Из базовой колоды выбирается случайная карта
  const basicDeck = cardsData.basicDeck;
  const card = basicDeck[Math.floor(Math.random() * basicDeck.length)];
  console.log('Взята карта:', card.name);
  return card;
}