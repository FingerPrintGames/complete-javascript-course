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
