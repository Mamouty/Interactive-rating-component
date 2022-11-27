let state = true;

const ratingSide = document.querySelector(".rating");
const thanksSide = document.querySelector(".thanks");
const buttonsList = document.getElementsByTagName("li");

// Displaying the rating side of the component card and removing it after the user submits his choice to display the thanks side of the card.
state ? thanksSide.remove() : ratingSide.remove();

// Listening to the li element that gets clicked
for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", () => {

        // Change the color of the clicked number
        console.log(buttonsList)
        buttonsList[i].classList.add("clicked-li");

        // Change back the color of any previously selected number from the list
        for (let j = 0; j < buttonsList.length; j++) {
            if (j !== i) {
                buttonsList[j].classList.remove("clicked-li");
            }
        }
    });
}


