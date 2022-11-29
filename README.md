# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./Screenshot%20Interactive%20rating%20component.png)


### Links

- Live Site URL: [Interactive Rating Component | Frontend Mentor](https://endearing-pasca-b05534.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I put my JavaScript into practice in this challenge and learned that I can embed an event listener inside  the callback function of another event listener:

To see how you can add code snippets, see below:

```js
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
```


### Continued development

I'm still at the beginner level of JavaScript so I intend on keeping learning it to get more comftrobal with it 


### Useful resources

- [How to flip a card](https://www.w3schools.com/howto/howto_css_flip_card.asp) - This example shows how to flip a card using only CSS, I used it with some modification to fit this challenge.


## Author
- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)
