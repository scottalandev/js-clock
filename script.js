setInterval(setClock, 50);

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-minute-hand]')
const secHand = document.querySelector('[data-second-hand]')


function setClock() {
  const currDate = new Date();
  const milSecRatio = currDate.getMilliseconds() / 1000;
  const secRatio = (milSecRatio + currDate.getSeconds()) / 60;
  const minRatio = (secRatio + currDate.getMinutes()) / 60;
  const hourRatio = (minRatio + currDate.getHours()) /12;
  setRotation(secHand, secRatio);
  setRotation(minHand, minRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();