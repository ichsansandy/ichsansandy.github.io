// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((element) => {
//     if (element.isIntersecting) {
//       element.target.classList.add("show");
//     } else {
//       element.target.classList.remove("show");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((element) => observer.observe(element));

//typing animation
var typed = new Typed(".auto-type", {
  strings: ["Software Engineer", "Fullstack Developer", "Backend Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// blob animation
const tween = KUTE.fromTo("#blob1", { path: "#blob1" }, { path: "#blob2" }, { repeat: 999, duration: 3000, yoyo: true });
const tween2 = KUTE.fromTo("#blobshadow1", { path: "#blobshadow1" }, { path: "#blobshadow2" }, { repeat: 999, duration: 3000, yoyo: true });

tween.start();
tween2.start();

// mouse animation
const magiclight = document.querySelector("#magiclight-blurry");

document.body.onpointermove = (event) => {
  const { x, y } = event;
  magiclight.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

const colorChange = document.querySelectorAll(".html, .css, .javascript, .java, .react");
colorChange.forEach((element) => {
  const defaultColor = magiclight.style.background;

  element.addEventListener("mouseover", () => {
    const color = element.dataset.color;
    magiclight.style.background = color;
  });

  element.addEventListener("mouseout", () => {
    magiclight.style.background = defaultColor;
  });
});

// slider image caraousel

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  freeMode: {
    enabled: true,
    momentumRatio: 0.2,
    momentumVelocityRatio: 0.4,
    sticky: true,
  },

  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 1,
    modifier: 1,
  },
});

// card chat gpt draging
