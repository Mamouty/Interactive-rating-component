let state = false;

const ratingSide = document.querySelector(".rating");
const thanksSide = document.querySelector(".thanks");

// Displaying the rating side of the component card and removing it after the user submits his choice to display the thanks side of the card.
state ? thanksSide.remove() : ratingSide.remove();
