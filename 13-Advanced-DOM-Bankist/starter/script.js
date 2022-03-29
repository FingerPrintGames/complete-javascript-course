'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//#region Smooth Scrolling (2 versions)
//Smooth Scrolling
//Old School Method
const buttonScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

buttonScrollTo.addEventListener(`click`, function (event) {
  //Get coordinates of section to scroll to
  const s1coords = section1.getBoundingClientRect();
  //Scrolling (add scrollY to top to account for user not being at the very top of the webpage)
  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);

  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrollY,
  //   behavior: `smooth`,
  // });

  //Newer version
  section1.scrollIntoView({ behavior: `smooth` });
});
//#endregion

///////////////////////////////////////
// Selecting, Deleting and Creating Elements

//Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(`.header`);
//document.querySelectorAll(`.header`);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`);
//Returns an HTML Collection which updates automatically when elements are created or deleted.
// console.log(allButtons);

//Creating and Inserting Elements
//.insertAdjacentHTML

//Creates a `We use cookies` message and adds it to HTML
const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.innerHTML = `We use cookies to improve functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>`;

//header.prepend(message); inserts element as first child
header.append(message); //inserts element as last child
//header.prepend(message.cloneNode(true)); duplicates element

// header.before(message); inserts element before header
// header.after(message); inserts element after header

//Deleting Elements
//Click `Got it` button to close cookie message. Removes message from HTML.
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, () => message.remove());

//.remove is recent
// Old way was message.parentElement.removeChild(message);

//Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

//Styles can't be viewed if they haven't been create
// console.log(message.style.backgroundColor);
// console.log(message.style.height); //Doesn't log anything

//You can use getComputedStyle to get around this
// console.log(getComputedStyle(message).height);

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

//Change a custom property/variable in CSS
// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

//Attributes
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt, logo.src);
// console.log(logo.className);

// //Non-standard method (for custom attributes)
// console.log(logo.getAttribute(`id`));

//Set Attributes
// logo.alt = `Nice modern logo`;
// logo.setAttribute(`company`, `Bankist`);

// const link = document.querySelector(`.nav__link--btn`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

//Data Attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add(`c`);
// logo.classList.remove(`c`);
// logo.classList.toggle(`c`);
// logo.classList.contains(`c`); //NOT includes

//Don't do this
// logo.className = `Kevin`;

///////////////////////////////////////
// Events and Event Handlers

// const alertH1 = function (event) {
//   alert(`addEventListener: Great! You are reading the heading.`);
//   //Use remove event listener if you only want to listen for event once.
//   //Doesn't have to be inside event listener (can be on a timer for instance)
//   h1.removeEventListener(`mouseenter`, alertH1);
// };

// const h1 = document.querySelector(`h1`);
// h1.addEventListener(`mouseenter`, alertH1);

// //On Event Property
// //Old school way of listening for events
// // h1.onmouseenter = function (event) {
// //   alert(`addEventListener: Great! You are reading the heading.`);
// // };

///////////////////////////////////////
// Bubbling and Capturing

//REWATCH BUBBLING VIDEO FOR GOOD REFERENCES
//Capturing Phase: event travels down the DOM tree from document to it's target.
//Bubbling Phase: event travels back up the DOM tree.

///////////////////////////////////////
// Event Propigation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

const link = document.querySelector(`.nav__link`);
const links = document.querySelector(`.nav__links`);
const nav = document.querySelector(`.nav`);

link.addEventListener(`click`, function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target, event.currentTarget);

  //Stop propigation
  //Prevents event from bubbling up to its parents
  //Not good practice to use in most cases
  event.stopPropagation();
});

links.addEventListener(`click`, function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target, event.currentTarget);
});

nav.addEventListener(`click`, function (event) {
  this.style.backgroundColor = randomColor();
  console.log(event.target, event.currentTarget);
});

//Events happen on all elements when bubbling up the DOM tree, but are only execute on elements with the same listener like above.

//event.target = points to the element where the click originated.
//event.currentTarget = points to the event listener of the current element.
//currentTarget === `this` keyword

//Add a `true` boolean value to the 3rd parameter of .addEventListener to set it to trigger during the capturing phase.
