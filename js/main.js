// Get the Dom element for the image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 0;
let interValId;

// Define function to start automatic image slider
const autoSlide = function () {
    // start the slideshow by calling slideImage()  every 2 seconds
    interValId = setInterval(() => slideImage(++imageIndex), 2500);
};
autoSlide();
// A function that updates the carousel display th show the specified image
const slideImage = function (index) {
    // calculate the update image index
    imageIndex = imageIndex == images.length - 1 ? -1 : imageIndex;
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${index * 100}%)`;
};
// a function that updates the carousel display to show the next or previous image
let updateClick = function (e) {
    // stop the automatic slideshow
    clearInterval(interValId);
    // calculate the update image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Restart the automatic slideshow
    autoSlide();
};
// add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(interValId));
// add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", () => autoSlide());