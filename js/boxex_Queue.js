let boxes = document.querySelectorAll('.box');
let currentIndex = 0;
let intervalId = null;

function changeColor() {
    
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });

    boxes[currentIndex].style.backgroundColor = "red";
    let box2Index = (currentIndex - 1 + boxes.length) % boxes.length;
    boxes[box2Index].style.backgroundColor = "blueviolet";

    let box3Index = (currentIndex - 2 + boxes.length) % boxes.length;
    boxes[box3Index].style.backgroundColor = "pink";

    let box4Index = (currentIndex - 3 + boxes.length) % boxes.length;
    boxes[box4Index].style.backgroundColor = "yellow";

    let box5Index = (currentIndex - 4 + boxes.length) % boxes.length;
    boxes[box5Index].style.backgroundColor = "blue";

    let box6Index = (currentIndex - 5 + boxes.length) % boxes.length;
    boxes[box6Index].style.backgroundColor = "green";

    currentIndex = (currentIndex + 1) % boxes.length;
}

document.querySelector('.start-btn').addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(changeColor, 750);
});

document.querySelector('.stop-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});