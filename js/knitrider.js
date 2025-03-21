let boxes = document.querySelectorAll('.box'); 
let btnStart = document.getElementById('start-btn'); 
let btnStop = document.getElementById('stop-btn');
let music = document.getElementById("audio_music");  

let position = 0; 
let isForward = true; 
let intervalId;  

let colors = ["#ff0000", "#c42222", "#9e3939", "#ae6161", "#dea4a4"];  

function updateColors() {    
    
    boxes.forEach(box => box.style.backgroundColor = "white");

    if (isForward) {
       
        for (let i = 0; i < colors.length; i++) {
            let boxIndex = position - i;
            if (boxIndex >= 0 && boxIndex < boxes.length) { 
                boxes[boxIndex].style.backgroundColor = colors[i];
            }
        }
        position++;

        if (position > boxes.length + colors.length - 1) { 
            position = boxes.length - 1;
            isForward = false;
        }
    } else { 
        
        for (let i = 0; i < colors.length; i++) {
            let boxIndex = position + i;
            if (boxIndex >= 0 && boxIndex < boxes.length) {
                boxes[boxIndex].style.backgroundColor = colors[i];
            }
        }
        position--;

        if (position < -colors.length) { 
            isForward = true;
            position = 0;
        }
    }
}  

function start() { 
    // if (!intervalId) {  
        intervalId = setInterval(updateColors, 100); 
        music.play();
    // } 
}  

function end() { 
    clearInterval(intervalId);
    music.pause();
    intervalId = null; 
}  

btnStart.addEventListener('click', start); 
btnStop.addEventListener('click', end);