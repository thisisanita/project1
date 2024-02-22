// When the user lands on the landing page, open the popup
// Get the elements by their ID
let popupWindow = document.getElementById("popup-window");
let startGame = document.getElementById("startgame");
console.log(startGame);

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

  //CUSTOMISE THE WELCOME MESSSAGE BASED ON THE PLAYER"S NAME
  let userName = document.getElementById("nameinput");
  let userNameValue = userName.value;
  console.log(userNameValue);
  const message = document.getElementById("message");
  console.log(message);
  message.innerHTML = `<p>welcome ${userNameValue}, YOU ARE CURRENTLY AT LEVEL 1! <br>
  GUESS THE WORD TO WIN!</p>`;

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

// Let user know what is the first letter of the word
let firstLetter = document.getElementById("word1char1");
firstLetter.innerHTML = `${correctWord[0]}`;
firstLetter.style.backgroundColor = "#ACD8AA";

// set counter for
let counter = 0;
console.log(counter);
//Add event listener to the submit button that will triggers a couple of things:
let submitButton = document.getElementById("submitanswer");
console.log(submitButton.textContent);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Creating an error message if word input is NOT 4
  let userInput = document.getElementById("wordinput");
  let userInputValue = userInput.value;
  let userInputLength = userInput.value.length;
  if (userInputLength !== 4) {
    let errorPara = document.createElement("p");
    let errorMessage = document.createTextNode("error message goes here");
    errorPara.appendChild(errorMessage);
    console.log(errorPara);
    // let messageContainer = document.getElementbyId("message-container");

    const element = document.getElementById("message-container");
    const child = document.getElementById("p1");
    element.insertBefore(errorPara, child);
  }

  // Reflect the word that the user submitted to the board.
  if (userInputLength === 4) {
    counter++;
    console.log(counter);
    for (let i = 0; i < userInputLength; i++) {
      let gridContainer = document.getElementById("grid-container"); // declaring grandparent
      let row = gridContainer.children[counter - 1]; // acessing the first child of the granparent - should coincide with the number of tries
      let column = row.children[i];
      console.log(column);
      console.log(userInputValue[i]);
      column.innerHTML = `${userInputValue[i]}`;
      if (userInputValue[i] === correctWord[i]) {
        column.style.backgroundColor = "#ACD8AA";
        console.log("hello");
      } else if (correctWord.includes(userInputValue[i])) {
        column.style.backgroundColor = "#FFBE86";
      }
    }
  }

  // Check if the player won or lost
  if (userInputValue === correctWord) {
    let resultPopup = document.createElement("p");
    let resultMessage = document.createTextNode("You have won!");
    resultPopup.appendChild(resultMessage);
    const resultContainer = document.getElementById("result-container");
    resultContainer.append(resultPopup);
    resultContainer.style.display = "block";
    console.log("you win");
  } else if (userInputValue !== correctWord && counter === 5) {
    console.log("you lose");
  }
});
