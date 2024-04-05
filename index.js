// slider of heading

let slideIndex = 1;
showSlide(slideIndex);
let slideInterval = setInterval(() => changeSlide(1), 3000); // Auto slide every 3 seconds

function changeSlide(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlide((slideIndex += n));
  slideInterval = setInterval(() => changeSlide(1), 4000); // Reset interval
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slider-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + -(slideIndex - 1) * 100 + "%)"; // Use transform for sliding effect
  }
}
// all option in navbar
var isElementVisible = false;
let btn = document.querySelector(".boxes1");
btn.onclick = () => {
  var icon = document.querySelector(".all-list-div");
  isElementVisible = !isElementVisible;
  if (isElementVisible) {
    icon.style.display = "block";
    clearInterval(interval);
  } else {
    icon.style.display = "none";
  }
};

// slider 01

const slider = document.querySelector(".slide-02");
const slides = document.querySelectorAll(".slider-images02");

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;
const containerWidth = document.querySelector(
  ".slider-container-02"
).clientWidth;
const maxOffset = -(totalSlides * slideWidth - containerWidth);

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) {
    // clearInterval(interval); // Stop auto slide
    return;
  }
  currentIndex = index;
  const offset = Math.max(-slideWidth * currentIndex, maxOffset);
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  goToSlide(currentIndex + 4);
}

function prevSlide() {
  goToSlide(currentIndex - 4);
}

document
  .querySelector(".right-controler02")
  .addEventListener("click", nextSlide);
document
  .querySelector(".left-controler02")
  .addEventListener("click", prevSlide);

//slider 02
const slider03 = document.querySelector(".slide-03");
const slides03 = document.querySelectorAll(".slider-images03");

let currentIndex03 = 0;
const slideWidth03 = slides03[0].clientWidth;
const totalSlides03 = slides03.length;
const containerWidth03 = document.querySelector(
  ".slider-container-03"
).clientWidth;
const maxOffset03 = -(totalSlides03 * slideWidth03 - containerWidth03);

function goToSlide03(index) {
  if (index < 0 || index >= totalSlides03) {
    // clearInterval(interval); // Stop auto slide
    return;
  }
  currentIndex03 = index;
  const offset03 = Math.max(-slideWidth03 * currentIndex03, maxOffset03);
  slider03.style.transform = `translateX(${offset03}px)`;
}

function nextSlide03() {
  goToSlide03(currentIndex03 + 4);
}

function prevSlide03() {
  goToSlide03(currentIndex03 - 4);
}

document
  .querySelector(".right-controler03")
  .addEventListener("click", nextSlide03);
document
  .querySelector(".left-controler03")
  .addEventListener("click", prevSlide03);
