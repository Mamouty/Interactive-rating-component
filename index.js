const card = document.querySelector(".card");
const ratingSide = document.querySelector(".rating");
const thanksSide = document.querySelector(".thanks");
const buttonsList = document.getElementsByTagName("li");
const submitButton = document.getElementById("submit");


for (let i = 0; i < buttonsList.length; i++) {
    // Listening to the li element that gets clicked
    buttonsList[i].addEventListener("click", () => {

        // Change the color of the clicked number
        buttonsList[i].classList.add("clicked-li");

        // Change back the color of any previously selected number from the list
        for (let j = 0; j < buttonsList.length; j++) {
            if (j !== i) {
                buttonsList[j].classList.remove("clicked-li");
            }
        }
        submitButton.addEventListener("click", () => {
            ratingSide.remove();
            card.classList.add("rotate")
        });
    });
}

