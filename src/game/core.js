import { startBattle } from './battle/battleManager.js';
import { generateLevel } from './levels/levelGenerator.js';
import { loadGameState, saveGameState } from './gameState.js';
import { updateUI } from './ui/uiManager.js';
import { initializePlayer } from './player.js';

export function initGame() {
  let gameState = loadGameState();
  if (!gameState.player) {
    gameState.player = initializePlayer();
  }
  // Генерация первого уровня
  const level = generateLevel();
  gameState.level = level;
  updateUI(gameState);
  console.log('Уровень сгенерирован:', level);
  startBattle();
  saveGameState(gameState);
}