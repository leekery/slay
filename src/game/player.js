export const player = {
  health: 100,
  energy: 3,
  deck: [],
  relics: [],
  gold: 0
};

export function initializePlayer() {
  // Инициализация базовой колоды и стартовой реликвии
  player.deck = ['attack_1', 'defend_1']; // идентификаторы карт из data/cards.json
  player.relics = ['relic_1'];             // идентификатор базовой реликвии из data/relics.json
  console.log('Игрок инициализирован:', player);
  return player;
}