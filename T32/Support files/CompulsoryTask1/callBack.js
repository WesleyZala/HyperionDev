// Code here for Compulsory Task 1

let intervalID;
let counter = 0;

//In this part of the code, there is a counter, which will execute the counterNumber function every 1 second
let startCounter = function() {
    intervalID = setInterval(counterNumbers, 1000);
 
}
const counterNumbers = () => {
    console.log(counter);
    counter++
}
//This part will stop the execution of the count process
function stopCounter() {
    clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

//In this part of the code, the program will start counting when the user clicks 
startButton.addEventListener("click", startCounter);

//In this part of the code, the program will stop counting when the user clicks
stopButton.addEventListener("click", stopCounter);

