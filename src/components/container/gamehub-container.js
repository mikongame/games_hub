import { renderTicTacToe } from '../container/games/tictactoe/tictactoe.js';
// import { renderPPTLS } from '../container/games/pptls/pptls.js';
// import { renderSlots } from '../container/games/slots/slots.js';

export function createGameHubContainer() {
  const container = document.createElement('main');
  container.id = 'game-container';
  container.classList.add('gamehub-container');

  // Mensaje inicial
  const placeholder = document.createElement('p');
  placeholder.classList.add('gamehub-placeholder');
  placeholder.textContent = 'Selecciona un juego del menú para comenzar';
  container.appendChild(placeholder);

  // Escucha clicks del menú
  document.addEventListener('click', (e) => {
    if (e.target.matches('.gamehub-nav-button')) {
      const game = e.target.dataset.game;
      container.innerHTML = ''; // Limpia contenido actual

      switch (game) {
        case 'tictactoe':
          renderTicTacToe(container);
          break;
        case 'pptls':
          // renderPPTLS(container);
          container.textContent = 'PPTLS en desarrollo...';
          break;
        case 'slots':
          // renderSlots(container);
          container.textContent = 'Tragaperras en desarrollo...';
          break;
        default:
          container.textContent = 'Juego no encontrado.';
      }
    }
  });

  return container;
}
