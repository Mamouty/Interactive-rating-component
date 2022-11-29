const card = document.querySelector(".card");
const ratingSide = document.querySelector(".rating");
const buttonsList = document.getElementsByTagName("li");
const textRating = document.getElementById("rated");
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

        // Display the thanks side of the card after clicking on the submit button when a number has been chosen
        submitButton.addEventListener("click", () => {
            ratingSide.remove();
            textRating.textContent = `You selected ${i + 1} out of 5`
            card.classList.add("rotate");
        });
    });
}

