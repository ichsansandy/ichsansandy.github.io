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
  strings: ["Software Engineer", "Full Stack Developer", "Back-End Engineer"],
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

const gallery = document.querySelector("ul");
const galleryItems = gallery.children;
const container = document.querySelector(".projects");
let moveVal = 0;

let dragging = false,
  mouselocation,
  gallerylocation;

const easeOutQuad = (t) => {
  return t * (2 - t);
};


moveGallery = () => {
  moveVal = easeOutQuad(window.scrollY * 0.0025);
  gallery.style.transform = `rotateZ(-2deg) translateX(${moveVal}%)`;

  requestAnimationFrame(moveGallery);
};

requestAnimationFrame(moveGallery);

const dragStart = (e) => {
  dragging = true;
  mouselocation = e.pageX;
  gallerylocation = container.scrollLeft;
};

const dragActive = (e) => {
  if (!dragging) return;
  
  let offset = e.pageX - mouselocation;
  container.scrollLeft = gallerylocation - offset;

  

};
const dragStop = (e) => {
  dragging = false;
  mouselocation = e.pageX;
  gallerylocation = container.scrollLeft;
};

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);

const firstSlideClone = sliderItems[0].cloneNode(true);
slider.appendChild(firstSlideClone);
let slideIndex = 0;
const slideWidth = sliderItems[0].offsetWidth;
