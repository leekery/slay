export function generateLevel() {
  // Генерация структуры маршрутов: битвы, элитные битвы, магазины, события, костры
  const nodes = ['battle', 'shop', 'event', 'elite'];
  const levelMap = [];
  for (let i = 0; i < 5; i++) {
    const node = nodes[Math.floor(Math.random() * nodes.length)];
    levelMap.push(node);
  }
  return levelMap;
}