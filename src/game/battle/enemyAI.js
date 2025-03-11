export function processTurn() {
  console.log('Ход врага');
  // Простой алгоритм: выбирается случайное действие из набора базовых
  const actions = ['атака', 'защита', 'бафф'];
  const action = actions[Math.floor(Math.random() * actions.length)];
  console.log('Враг выполняет действие:', action);
  return action;
}