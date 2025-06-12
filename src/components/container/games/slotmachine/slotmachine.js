import './slotmachine.css';

export function renderSlots(container) {
  container.innerHTML = ''; // Limpiar

  // === Selector visual de jugador ===
  const selector = document.createElement('div');
  selector.classList.add('selector-jugador');

  const titulo = document.createElement('p');
  titulo.textContent = '¿Cómo quieres jugar a las tragaperras?';

  const btnInvitado = document.createElement('button');
  btnInvitado.textContent = '🎮 Jugar como invitado';
  btnInvitado.addEventListener('click', () => {
    iniciarSlots(container, 'Invitado', 'invitado');
  });

  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Introduce tu nombre';
  input.required = true;

  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.textContent = '📝 Jugar como jugador';

  form.append(input, btnSubmit);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = input.value.trim() || 'Jugador';
    iniciarSlots(container, nombre, 'jugador');
  });

  selector.append(titulo, btnInvitado, form);
  container.appendChild(selector);
}

// === Función principal de juego ===
function iniciarSlots(container, nombreJugador, modo) {
  const clave = nombreJugador.toLowerCase().replace(/\s+/g, '_');

  // Recuperar datos
  let creditos = cargar(`slots_creditos_${clave}`) || 1000;
  let ganancia = cargar(`slots_ganancia_${clave}`) || 0;

  container.innerHTML = ''; // Limpiar antes de pintar juego

  const wrapper = document.createElement('div');
  wrapper.classList.add('slots-wrapper');

  // === Puntuación ===
  const scores = document.createElement('section');
  scores.classList.add('slots-scores');

  const amountLabel = document.createElement('label');
  amountLabel.textContent = 'Créditos:';
  const amountInput = document.createElement('input');
  amountInput.type = 'text';
  amountInput.id = 'amount';
  amountInput.value = creditos;

  const winLabel = document.createElement('label');
  winLabel.textContent = 'Ganancia:';
  const winInput = document.createElement('input');
  winInput.type = 'text';
  winInput.id = 'win';
  winInput.disabled = true;
  winInput.value = ganancia;

  scores.append(amountLabel, amountInput, winLabel, winInput);

  // === Rodillos ===
  const display = document.createElement('section');
  display.classList.add('slots-display');

  const createReel = (id) => {
    const div = document.createElement('div');
    div.classList.add('slots-reel');
    div.innerHTML = `<img id="${id}" src="/img/7.png" alt="reel">`;
    return div;
  };

  display.append(createReel('reel1'), createReel('reel2'), createReel('reel3'));

  // === Controles ===
  const controls = document.createElement('section');
  controls.classList.add('slots-controls');

  const betLabel = document.createElement('label');
  betLabel.textContent = 'Apuesta:';

  const betSelect = document.createElement('select');
  betSelect.id = 'bet';
  [1, 10, 20, 40, 60, 100, 200, 500].forEach(v => {
    const option = document.createElement('option');
    option.value = v;
    option.textContent = `${v}c`;
    betSelect.appendChild(option);
  });

  const spinButton = document.createElement('button');
  spinButton.textContent = '🎰 Girar';
  spinButton.id = 'spin';

  controls.append(betLabel, betSelect, spinButton);

  // === Tabla de premios ===
  const paytable = document.createElement('section');
  paytable.classList.add('slots-paytable');

  for (let i = 9; i >= 0; i--) {
    const fila = document.createElement('div');
    fila.innerHTML = `
      <img src="/img/${i}.png" alt="${i}">
      <img src="/img/${i}.png" alt="${i}">
      <img src="/img/${i}.png" alt="${i}">
      <span>${getReward([i, i, i])}</span>
    `;
    paytable.appendChild(fila);
  }

  // Ensamblar juego
  wrapper.append(scores, display, controls, paytable);
  container.appendChild(wrapper);

  // === Lógica del juego ===
  spinButton.addEventListener('click', () => {
    let amount = parseInt(amountInput.value);
    const bet = parseInt(betSelect.value);
    let wins = parseInt(winInput.value) || 0;

    if (isNaN(amount) || amount < bet) {
      alert('Saldo insuficiente o no válido');
      return;
    }

    const reels = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));
    reels.forEach((num, i) => {
      document.getElementById(`reel${i + 1}`).src = `/img/${num}.png`;
    });

    const reward = getReward(reels);
    if (reward > 0) {
      const prize = reward * bet;
      wins = prize;
      amount += prize;
    }

    amount -= bet;
    amountInput.value = amount;
    winInput.value = wins;

    if (modo === 'jugador') {
      guardar(`slots_creditos_${clave}`, amount);
      guardar(`slots_ganancia_${clave}`, wins);
    }
  });

  // === Función de premios ===
  function getReward(reels) {
    const paytable = {
      "0": 1, "1": 2, "2": 3, "3": 5, "4": 10,
      "5": 20, "6": 100, "7": 300, "8": 500, "9": 1000
    };

    const counts = {};
    for (const num of reels) {
      if (num === 9) continue;
      counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
      const total = counts[num] + reels.filter(n => n === 9).length;
      if (total >= 3) return paytable[num];
    }

    return reels.every(n => n === 9) ? paytable["9"] : 0;
  }

  function guardar(clave, valor) {
    localStorage.setItem(clave, valor.toString());
  }

  function cargar(clave) {
    return parseInt(localStorage.getItem(clave));
  }
}
