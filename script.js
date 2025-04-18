// JavaScript can go here in the future
console.log("JavaScript is connected!");

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // fade in once
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const words = ["Software Engineer", "Web Developer", "Creative Thinker", "Student"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  currentWord = words[i];
  typewriter.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}

type();
