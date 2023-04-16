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
console.log(colorChange);
colorChange.forEach((element) => {
  const defaultColor = magiclight.style.background

  element.addEventListener("mouseover", () => {
    const color = element.dataset.color
    magiclight.style.background = color
  });

  element.addEventListener("mouseout",()=>{
    console.log("mouse keluar")
    magiclight.style.background = defaultColor;
  })
});
