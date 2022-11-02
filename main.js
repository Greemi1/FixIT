const nav = document.querySelector('nav ul');
const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');

openMenuBtn.addEventListener('click', () => {
  nav.classList.add('active');
  openMenuBtn.classList.remove('active');
  closeMenuBtn.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  openMenuBtn.classList.add('active');
  closeMenuBtn.classList.remove('active');
});

window.addEventListener('scroll', () => {
  nav.classList.remove('active');
  openMenuBtn.classList.add('active');
  closeMenuBtn.classList.remove('active');
});

// Counter

const achievementContainer = document.querySelector('.achievement');
const counter = document.querySelectorAll('.counter');
let bol = false;

const sectionOffset = achievementContainer.offsetTop + achievementContainer.offsetHeight;
const pageOffset = window.innerHeight + pageYOffset;

if (pageOffset < sectionOffset && bol == false) {
  counter.forEach((counter) => {
    function updateCount() {
      const target = +counter.getAttribute('data-target');
      const speed = +counter.getAttribute('data-speed');
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = count + 1;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    }
    updateCount();
    bol = true;
  });
}

// Active links

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
      li.style.pointerEvents = 'auto';
    }
  });
});

// Swipers

const reviewsSwiper = new Swiper('.reviews-slider', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const blogsSwiper = new Swiper('.blogs-slider', {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
