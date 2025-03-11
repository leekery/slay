import { processTurn } from './enemyAI.js';
import { drawCard } from './cardManager.js';

export function startBattle() {
  console.log('Начало битвы');
  // Запуск цикла битвы
  processTurn();
  drawCard();
}