// Hamburger icon logic
document.getElementById("mobile-menu").addEventListener("click", function () {
  document.getElementById("headerNav").classList.toggle("show");
});

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
