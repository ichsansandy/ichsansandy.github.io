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
var typed = new Typed('.auto-type', {
  strings: ['Software Engineer', 'Fullstack Developer', 'Backend Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// blob animation
const tween = KUTE.fromTo('#blob1', { path: '#blob1' }, { path: '#blob2' }, { repeat: 999, duration: 3000, yoyo: true });
const tween2 = KUTE.fromTo('#blobshadow1', { path: '#blobshadow1' }, { path: '#blobshadow2' }, { repeat: 999, duration: 3000, yoyo: true });

tween.start();
tween2.start();

// mouse animation
const magiclight = document.querySelector('#magiclight-blurry');

document.body.onpointermove = (event) => {
  const { x, y } = event;
  magiclight.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 3000, fill: 'forwards' }
  );
};

const colorChange = document.querySelectorAll('.html, .css, .javascript, .java, .react');
colorChange.forEach((element) => {
  const defaultColor = magiclight.style.background;

  element.addEventListener('mouseover', () => {
    const color = element.dataset.color;
    magiclight.style.background = color;
  });

  element.addEventListener('mouseout', () => {
    magiclight.style.background = defaultColor;
  });
});

// slider image caraousel

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
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

// card render
const portfolio = [
  {
    title: 'Kelar.in',
    year: 2023,
    description: "Designed to take your team's productivity to the next level",
    backgroundClass: 'kelar-in',
    frontendStack: ['react', 'tailwind'],
    backendStack: ['java'],
    dbStack: ['mysql', 'firestore'],
  },
  {
    title: '-',
    year: 2023,
    description: 'Discover the magic of experimental artistry with every project we undertake!',
    backgroundClass: 'experiment',
    frontendStack: [],
    backendStack: [],
    dbStack: [],
  },
  {
    title: '-',
    year: 2023,
    description: 'It is like a radiant flower, glowing with the brilliance of creativity..',
    backgroundClass: 'flower',
    frontendStack: [],
    backendStack: [],
    dbStack: [],
  },
  {
    title: '-',
    year: 2023,
    description: 'This will forever be celebrated as a masterpiece of its time.',
    backgroundClass: 'timeless',
    frontendStack: [],
    backendStack: [],
    dbStack: [],
  },
  {
    title: '-',
    year: 2023,
    description: 'I am a masterclass in minimalism, where each stroke and line serves a purpose in the greater composition.',
    backgroundClass: 'room',
    frontendStack: [],
    backendStack: [],
    dbStack: [],
  },
  {
    title: '-',
    year: 2023,
    description: 'My persistence and determination are evident in my tireless work ethic.',
    backgroundClass: 'tower',
    frontendStack: [],
    backendStack: [],
    dbStack: [],
  },
];

const swiperContainer = document.querySelector('.swiper-wrapper');

function cardPortfolio(card) {
  const frontend = card.frontendStack.map((stack) => `<div class="icon ${stack}-icon"></div>`).join('');
  const backend = card.backendStack.map((stack) => `<div class="icon ${stack}-icon"></div>`).join('');
  const db = card.dbStack.map((stack) => `<div class="icon ${stack}-icon"></div>`).join('');

  return `<div class="swiper-slide slide-background  ${card.backgroundClass}">
            <div class="slide-tech-stack">
              <div class="slide-tech-stack-frontend">
                ${frontend}
              </div>
              <div class="slide-tech-stack-backend">
                ${backend}
              </div>
              <div class="slide-tech-stack-db">
                ${db}
              </div>
            </div>
            <p class="slide-info-brief">${card.description}</p>
            <p class="slide-info-footer">${card.title === '-' ? 'Future Project' : card.title} <span>&#183;</span> ${card.year}</p>
          </div>`;
}

const listPort = portfolio.map(cardPortfolio).join('');

swiperContainer.innerHTML = listPort;
