let boxes = document.querySelectorAll('.box');
        let currentIndex = 0;

        function changeColor() {

            boxes[currentIndex].style.backgroundColor = "red";  // 1 box (0)

            
            let box2Index = (currentIndex - 1 + boxes.length) % boxes.length;   // 6 box (5)
            boxes[box2Index].style.backgroundColor = "blueviolet";

            let box3Index = (currentIndex - 2 + boxes.length) % boxes.length;  // 5 box (4)
            boxes[box3Index].style.backgroundColor = "pink";

            let box4Index = (currentIndex - 3 + boxes.length) % boxes.length;  // 4 box (3)
            boxes[box4Index].style.backgroundColor = "yellow";

            let box5Index = (currentIndex - 4 + boxes.length) % boxes.length;  // 3 box (2)
            boxes[box5Index].style.backgroundColor = "blue";

            let box6Index = (currentIndex - 5 + boxes.length) % boxes.length;  // 2 box (1)
            boxes[box6Index].style.backgroundColor = "green";

            
            currentIndex = (currentIndex + 1) % boxes.length;
        }

        setInterval(changeColor, 750);