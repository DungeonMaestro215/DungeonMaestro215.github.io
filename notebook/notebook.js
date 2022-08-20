
import words from './words.json' assert { type: "json" };

let currentPhraseIdx = 0;

window.onload = () => {
    // Attach on click event to spinner
    const spinner = document.getElementById("random-spinner");
    // Adding these after the page loads prevents weird effects right at the start
    spinner.classList.add("animation-halfsecond");
    [...spinner.getElementsByClassName("spinner-element")].forEach(element => element.classList.add("animation-second"));
    spinner.style.width = spinner.offsetWidth + "px";   // Initially starts blank causing no animation
    // spinner.addEventListener("mouseenter", () => ChangeSpinner(spinner));
    spinner.addEventListener("click", () => ChangeSpinner(spinner));
}

// Do some fun stuff with the random spinner
const ChangeSpinner = function(spinner) {
    console.log(spinner.style.width);
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

    // Generate N random phrases
    for (let i = 0; i < N; i++) {
        if (i != currentPhraseIdx) {
            phrases[i].innerHTML = GetPhrase();
        }
    }

    // Adjust the spinner's width
    spinner.style.width = phrases[randIdx].innerHTML.length * 10 + "px";

    // Update the current index
    currentPhraseIdx = randIdx;

    // Scroll all of the divs
    for (let i = 0; i < N; i++) {
        phrases[i].style.transform = `translateY(${randIdx * -heightOfSpinnerElement}px)`;
    }
}

const GetPhrase = function() {
    // Get random index
    const randAdjIdx1 = Math.floor(Math.random() * words.adjectives.length);
    const randAdjIdx2 = Math.floor(Math.random() * words.adjectives.length);
    const randNounIdx = Math.floor(Math.random() * words.nouns.length);

    // Combine
    return words.adjectives[randAdjIdx1].word + " " + words.adjectives[randAdjIdx2].word + " " + words.nouns[randNounIdx].word;
}