document.getElementById('newGame').addEventListener('click', () => {
  // При выборе новой игры перенаправляем на карту уровня
  window.location.href = 'map.html'
})

document.getElementById('continue').addEventListener('click', () => {
  // Пока что реализуем тот же переход, что и для карты уровня
  window.location.href = 'map.html'
})

document.getElementById('mapView').addEventListener('click', () => {
  // Переход на страницу карты
  window.location.href = 'map.html'
})
