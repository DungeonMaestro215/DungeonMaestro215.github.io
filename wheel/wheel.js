
import project_list from './wheel.json' assert { type: "json" };

window.onload = () => {
    // Attach on click event to spinner
    const wheel = document.getElementById("wow");

    wheel.addEventListener("click", () => SpinWheel(wheel));
}

// Do some fun stuff with the random spinner
const SpinWheel = function(wheel) {
    // console.log(wheel.style.width);
    // const heightOfSpinnerElement = 27;

    wheel.innerHTML = GetPhrase();
}

const GetPhrase = function() {
    return project_list.projects + " " + project_list.games;
}