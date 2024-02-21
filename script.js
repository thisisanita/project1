// When the user lands on the landing page, open the popup
// Get the elements by their ID
let popupWindow = document.getElementById("popup-window");
let startGame = document.getElementById("startgame");

// Show the pop-up window on pageload
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    popupWindow.style.display = "block";
  }, 1000);
});
// Add event listener to the startbutton for 2 main actions to take place.
startGame.addEventListener("click", function (event) {
  event.preventDefault();
  // close the popup
  popupWindow.style.display = "none";
  // Start countdown time
  const timer = document.getElementById("timer");
  let timerInterval; // declares a variable named timerInterval but doesn't assign any value to it first

  // Defines a function that clear any existing timer and set the timer initial value
  startTimer = () => {
    clearInterval(timerInterval); // Clear any existing interval
    let second = 0,
      minute = 2; // Set initial timer value to 2 minutes

    // set an interval for every 1000ms
    timerInterval = setInterval(() => {
      //Ternary operator used here
      timer.innerHTML =
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second); // if minute is less than then, add a 0 in front of the minute. else, just minute will do. Same for seconds.
      if (second === 0) {
        if (minute === 0) {
          clearInterval(timerInterval);
          alert("Time is up!"); // NEED TO OPEN ANOTHER POP UP HERE TO TELL PLAYER HE/SHE HAS LOST THE GAME
        } else {
          minute--;
          second = 59; // Set seconds to 59 for smooth countdown
        }
      } else {
        second--;
      }
      console.log(timer.innerHTML);
    }, 1000);
  };
  startTimer(); // Call the startTimer function to initiate the countdown
});

// create an array and assign the words for the easy level
const easyWords = ["show", "some", "love"];

// create a random function to select a word from the array
let correctWord = easyWords[Math.floor(Math.random() * easyWords.length)];
console.log(correctWord);

//
