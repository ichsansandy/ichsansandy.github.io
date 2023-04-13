const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    console.log(element);
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));


var typed = new Typed(".auto-type", {
    strings: ["Software Engineer", "Full Stack Developer", "Back-End Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });