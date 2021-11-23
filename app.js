document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

// document.querySelector('#men').addEventListener('click', () => {
//   document.querySelector('nav ul').classList.toggle('showmenu');
// });

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
});

sr.reveal(`.animate`, {
    interval: 200
})

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

