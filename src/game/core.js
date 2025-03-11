import { startBattle } from './battle/battleManager.js';
import { generateLevel } from './levels/levelGenerator.js';

export function initGame() {
  // Инициализация состояния игры, загрузка данных из JSON
  // Запуск первого уровня
  const level = generateLevel();
  console.log('Уровень сгенерирован:', level);
  startBattle();
}