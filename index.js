console.log('boop')

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


// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`remove`)
      document.getElementById('floatingNav').classList.remove('show');
    } else {
      console.log(`show`)
      document.getElementById('floatingNav').classList.add('show');
    }
  });
}

// Create an intersection observer
let observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

// Observe the content element
observer.observe(document.getElementById('headerNav'));