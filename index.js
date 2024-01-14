console.log('boop')

window.addEventListener('scroll', function() {
  var floatingNav = document.getElementById('floatingNav');
  if (window.scrollY > 110) {
    console.log(`boop`)
    floatingNav.classList.add('show');
  } else {
    console.log('beep')
    floatingNav.classList.remove('show');
  }
});