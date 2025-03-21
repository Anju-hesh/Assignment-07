// const people = ["p0", "p1", "p2", "p3", "p4", "p5"];
// const letters = ["A", "B", "C", "D", "E", "F"];
        
// function rotateLetter() {
//     const letterDivs = document.querySelectorAll('.letter');
    
//     // letterDivs.forEach(letter => {
//     //      letter.style.opacity = 1;
//     // });
            
//     setTimeout(() => {
//         const lastLetter = letters.pop();  // We can get last Element
//         letters.unshift(lastLetter);       // We can add last Element at the first position
                
//         letterDivs.forEach((letterDiv, i) => {
//             letterDiv.textContent = letters[i];
//         },500);
                
//         setTimeout(rotateLetter, 1000);  // used function to call itself after 1 second   // Recursion
//     },1000);
// }
        
// rotateLetter();

const letters = ["A", "B", "C", "D", "E", "F"];
let timeoutId = null;

function rotateLetter() {
    const letterDivs = document.querySelectorAll('.letter');

    const lastLetter = letters.pop();
    letters.unshift(lastLetter);

    letterDivs.forEach((letterDiv, i) => {
        letterDiv.textContent = letters[i];
    });

    timeoutId = setTimeout(rotateLetter, 1000);
}

document.querySelector('.start-btn').addEventListener('click', () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    rotateLetter();
});

document.querySelector('.stop-btn').addEventListener('click', () => {
    clearTimeout(timeoutId);
    // timeoutId = null; 
});