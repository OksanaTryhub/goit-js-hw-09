
const refs = {
  changeColorStartBtn: document.querySelector('[data-start]'),
  changeColorStoptBtn: document.querySelector('[data-stop]'),
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startChangeColor = () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
}

function start() {
    intervalId = setInterval(startChangeColor, INTERVAL_DELAY);
    refs.changeColorStoptBtn.removeAttribute('disabled');
    refs.changeColorStartBtn.setAttribute('disabled', true);
}

function stop() {
    clearInterval(intervalId)
    refs.changeColorStartBtn.removeAttribute('disabled');
    refs.changeColorStoptBtn.setAttribute('disabled', true);

}

refs.changeColorStartBtn.addEventListener('click', start);
refs.changeColorStoptBtn.addEventListener('click', stop);
