export function updateUI(gameState) {
  const container = document.getElementById('game-container');
  container.innerHTML = `
    <div>
      <h1>Состояние игры</h1>
      <pre>${JSON.stringify(gameState, null, 2)}</pre>
    </div>
  `;
}