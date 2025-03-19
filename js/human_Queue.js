const people = ["p0", "p1", "p2", "p3", "p4", "p5"];
const letters = ["A", "B", "C", "D", "E", "F"];
        
function rotateLetter() {
    const letterDivs = document.querySelectorAll('.letter');
    
    // letterDivs.forEach(letter => {
    //      letter.style.opacity = 1;
    // });
            
    setTimeout(() => {
        const lastLetter = letters.pop();  // We can get last Element
        letters.unshift(lastLetter);       // We can add last Element at the first position
                
        letterDivs.forEach((letterDiv, i) => {
            letterDiv.textContent = letters[i];
        },500);
                
        setTimeout(rotateLetter, 1000);  // used function to call itself after 1 second   // Recursion
    },1000);
}
        
rotateLetter();