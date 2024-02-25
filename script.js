// Array containing all the easy level words
const easyWords = ["read", "show", "code"];

// Select a random word from the easy level array of words
// This will be the word the player has to guess
const correctWord = easyWords[Math.floor(Math.random() * easyWords.length)];

// Reflect the first letter of the word to the gameboard
let firstLetter = document.getElementById("word1char1");
firstLetter.innerHTML = `${correctWord[0]}`;
firstLetter.style.backgroundColor = "#ACD8AA";

// Set counter to track the number of game attempts
let counter = 0;

// Declare other variables
const popupWindow = document.getElementById("popup-window");
const startGame = document.getElementById("startgame");
const overlay = document.getElementById("overlay");
const popupResult = document.getElementById("result-window");
const resultText = document.getElementById("resulttext");
const timer = document.getElementById("timer");

// Create timer function for 2 minutes
let timerInterval; // Declare timerInterval variable without any value first
const startTimer = () => {
  clearInterval(timerInterval); // Clear any existing interval
  let second = 0,
    minute = 2;
  // set an interval for every 1000ms
  timerInterval = setInterval(() => {
    //Ternary operator used here
    timer.innerHTML =
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second); // If minute is less than then, add a 0 in front of the minute. else, just minute will do. Same for seconds.
    if (second === 0) {
      if (minute === 0) {
        clearInterval(timerInterval); // Clear the timer
        // Inform player that they have lost
        overlayBlock();
        resultText.innerHTML = `<p>Sorry, you took too long!<br />The word is <span class="correct-style">${correctWord}</span>.<br /><br />Do you want to try again?</p>`;
        const restartButton = document.getElementById("continue");
        restartButton.innerText = "Restart Game";
        popupResult.style.display = "block";
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

// Create function to switch overlay on and off
const overlayBlock = () => {
  overlay.style.display = "block";
};

const overlayNone = () => {
  overlay.style.display = "none";
};

// Show the introductory pop-up window on pageload
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    popupWindow.style.display = "block";
  }, 1000);
});

// Add event listener to the start button on the popup window for several actions to take place.
startGame.addEventListener("click", function (event) {
  event.preventDefault();

  // Close the introductory popup
  popupWindow.style.display = "none";

  // Remove the overlay
  overlayNone();

  // Customize the introductory message based on player's name
  const userName = document.getElementById("nameinput");
  const userNameValue = userName.value;
  const message = document.getElementById("message");
  message.innerHTML = `<p>welcome ${userNameValue}, YOU ARE CURRENTLY AT LEVEL 1! <br>
  GUESS THE WORD TO WIN!</p>`;

  // Start countdown timer
  startTimer();
});

// Add event listener to the submit button that will triggers a couple of things
const submitButton = document.getElementById("submitanswer");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Create an error message if word input is NOT 4
  const userInput = document.getElementById("wordinput");
  const userInputValue = userInput.value.toLowerCase();
  const userInputLength = userInput.value.length;
  if (userInputLength !== 4) {
    const errormessage = document.getElementById("errormessage");
    errormessage.innerHTML = `Word should contain 4 letters.`;
  }

  // Reflect the word that the user submitted to the gameboard
  if (userInputLength === 4) {
    errormessage.innerHTML = "";
    counter++;
    for (let i = 0; i < userInputLength; i++) {
      const gridContainer = document.getElementById("grid-container"); // declaring grandparent
      const row = gridContainer.children[counter - 1]; // acessing the first child of the granparent - should coincide with the number of tries
      const column = row.children[i]; // accessing the grandparent's children's children
      column.innerHTML = `${userInputValue[i]}`;
      if (userInputValue[i] === correctWord[i]) {
        column.style.backgroundColor = "#ACD8AA";
      } else if (correctWord.includes(userInputValue[i])) {
        column.style.backgroundColor = "#FFBE86";
      } else {
        column.style.backgroundColor = "#F1F0F9";
      }
    }
  }

  // Clear the exisiting user input
  userInput.value = "";

  //  Check and inform the player if they have won or lost
  if (userInputValue === correctWord) {
    window.clearInterval(timerInterval);
    overlayBlock();
    resultText.innerHTML = `<p>Congratulations, you have guessed correctly!<br />The word is <span class="correct-style">${correctWord}</span>.<br /><br />Are you ready for the next level? </p>`;
    popupResult.style.display = "block";
  } else if (userInputValue !== correctWord && counter === 5) {
    window.clearInterval(timerInterval);
    overlayBlock();
    resultText.innerHTML = `<p>Sorry, you did not guess correctly!<br />The word is <span class="correct-style">${correctWord}</span>.<br /><br />Do you want to try again?</p>`;
    const restartButton = document.getElementById("continue");
    restartButton.innerText = "Restart Game";
    popupResult.style.display = "block";
  }
});
