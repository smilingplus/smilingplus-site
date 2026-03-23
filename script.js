const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const playButton = document.getElementById('playAnim');
const smiley = document.getElementById('smileyFace');
const subscribeButton = document.getElementById('animSubscribe');

function runAnimation() {
  if (!playButton || !smiley || !subscribeButton) {
    return;
  }

  smiley.classList.remove('jump');
  subscribeButton.classList.remove('pressed');

  void smiley.offsetWidth;
  smiley.classList.add('jump');

  setTimeout(() => {
    subscribeButton.classList.add('pressed');
  }, 700);

  setTimeout(() => {
    subscribeButton.classList.remove('pressed');
  }, 1500);
}

if (playButton) {
  playButton.addEventListener('click', runAnimation);
}
