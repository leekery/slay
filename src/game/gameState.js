import fs from 'fs';
import path from 'path';

const stateFilePath = path.join(__dirname, '../../save', 'gameState.json');

export function saveGameState(state) {
  fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2));
  console.log('Игра сохранена');
}

export function loadGameState() {
  if (fs.existsSync(stateFilePath)) {
    const state = JSON.parse(fs.readFileSync(stateFilePath));
    console.log('Состояние игры загружено');
    return state;
  } else {
    console.log('Сохранение не найдено, загружается новое состояние');
    return {};
  }
}