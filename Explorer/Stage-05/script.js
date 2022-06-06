let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
// Event-driven
// programação imperativa
// callback
play.addEventListener('click', function() {
  play.classList.add('hide')
  pause.classList.remove('hide')
})

pause.addEventListener('click', function() {
  pause.classList.add('hide')
  play.classList.remove('hide')
})