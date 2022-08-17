// import { generateSlug } from '../node_modules/random-word-slugs' assert { type: "module" };
import spinnerdata from './test.json' assert { type: "json" };
import words from './words.json' assert { type: "json" };

let currentPhraseIdx = 0;

window.onload = () => {
    // Attach on click event to spinner
    const spinner = document.getElementById("random-spinner");
    spinner.addEventListener("mouseenter", () => ChangeSpinner(spinner));
    spinner.addEventListener("click", () => ChangeSpinner(spinner));
}

// Do some fun stuff with the random spinner
const ChangeSpinner = function(spinner) {
    const N = 20;
    const heightOfSpinnerElement = 27;

    // Random value 1-N for the shown phrase
    let randIdx = Math.floor(Math.random() * N);
    // Make sure it changes from the last index
    while (randIdx === currentPhraseIdx) {
        randIdx = Math.floor(Math.random() * N);
    }
    
    // Collect all of the divs
    let phrases = [...spinner.getElementsByClassName("spinner-element")];

    // Generate N random phrases and scroll all of the divs
    for (let i = 0; i < N; i++) {
        if (i != currentPhraseIdx) {
            phrases[i].innerHTML = GetPhrase();
        }
        phrases[i].style.transform = `translateY(${randIdx * -heightOfSpinnerElement}px)`;
    }

    // Adjust the spinner's width
    // console.log(phrases[randIdx].offsetWidth);
    // spinner.style.width = phrases[randIdx].offsetWidth + "px";
    // console.log(spinner.offsetWidth);
    // spinner.style.width = randIdx * 10 + "px";

    // Update the current index
    currentPhraseIdx = randIdx;
}

const GetPhrase = function() {
    // Get random index
    const randAdjIdx1 = Math.floor(Math.random() * words.adjectives.length);
    const randAdjIdx2 = Math.floor(Math.random() * words.adjectives.length);
    const randNounIdx = Math.floor(Math.random() * words.nouns.length);

    // Combine
    return words.adjectives[randAdjIdx1].word + " " + words.adjectives[randAdjIdx2].word + " " + words.nouns[randNounIdx].word;

}