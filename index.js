// console.log('boop')

// window.addEventListener('scroll', function() {
//   let floatingNav = document.getElementById('floatingNav');
//   if (window.scrollY > 110) {
//     console.log(`boop`)
//     floatingNav.classList.add('show');
//   } else {
//     console.log('beep')
//     floatingNav.classList.remove('show');
//   }
// });

// logic for what is triggered
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(`remove`)
      document.getElementById('floatingNav').classList.remove('show');
    } else {
      // console.log(`show`)
      document.getElementById('floatingNav').classList.add('show');
    }
  });
}

// instantiates IntersectionOberserver and sets threshold
let observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

// sets headerNav to be observed
observer.observe(document.getElementById('headerNav'));