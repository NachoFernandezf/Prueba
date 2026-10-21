const boton = document.getElementById('saludoBtn');
const mensaje = document.getElementById('mensaje');

if (boton && mensaje) {
  boton.addEventListener('click', () => {
    mensaje.textContent = '¡Hola! Esta página funciona con HTML, CSS y JavaScript.';
    boton.textContent = '¡Hecho!';
  });
}

const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360;
  const hourDegrees = (hours / 12) * 360;

  if (secondHand) secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  if (minuteHand) minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  if (hourHand) hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
