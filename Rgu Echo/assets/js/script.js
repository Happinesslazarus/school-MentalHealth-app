'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);


/**
 * Quote
 */
const quotes = [
  "You matter more than you know",
  "It's okay not to be okay",
  "Your mental health is a priority",
  "You are stronger than you think",
  "Recovery is possible",
  "You are not alone in this journey",
  "Small steps lead to big changes",
  "Your feelings are valid",
  "Asking for help is a sign of strength",
  "You deserve peace and happiness"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('mental-health-quote');

function setQuote(index) {
  quoteElement.classList.add('fade-out');

  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.classList.remove('fade-out');
    quoteElement.classList.add('fade-in');
  }, 300);

  setTimeout(() => {
    quoteElement.classList.remove('fade-in');
  }, 600);
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  setQuote(currentQuoteIndex);
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  setQuote(currentQuoteIndex);
}

// Add event listeners for click and touch
document.getElementById('nextQuote').addEventListener('click', nextQuote);
document.getElementById('nextQuote').addEventListener('touchstart', nextQuote);

document.getElementById('prevQuote').addEventListener('click', prevQuote);
document.getElementById('prevQuote').addEventListener('touchstart', prevQuote);

// Change the quote every time the page is refreshed or reloaded
window.addEventListener('load', () => {
  // Set a random initial quote
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  setQuote(currentQuoteIndex);
});
