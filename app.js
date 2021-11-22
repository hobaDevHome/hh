document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

document.querySelector('#men').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
});

sr.reveal(`.hero-content,.experts,.locations `, {
  interval: 200,
});
