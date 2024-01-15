// console.log('boop')

// window.addEventListener('scroll', function() {
//   let floatingNav = document.getElementById('floatingNav');
//   if (window.scrollY > 110) {
//     console.log(`show`)
//     floatingNav.classList.add('show');
//   } else {
//     console.log('remove')
//     floatingNav.classList.remove('show');
//   }
// });

// logic for what is triggered
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    document
      .getElementById("floatingNav")
      .classList.toggle("show", !entry.isIntersecting);
  });
}

// instantiates IntersectionOberserver and sets threshold
let observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

// sets headerNav to be observed
observer.observe(document.getElementById("headerNav"));
