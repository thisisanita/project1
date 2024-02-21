// When the user lands on the landing page, open the popup
// Get the elements by their ID
var popupWindow = document.getElementById("popup-window");
var startGame = document.getElementById("startgame");
// Show the pop-up window on pageload
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    popupWindow.style.display = "block";
  }, 1000);
});
// Hide the pop-up window when the close button is clicked
startGame.addEventListener("click", function () {
  popupWindow.style.display = "none";
});
// start countdown timer when user lands on the landing page
// var countdown = newDate.gettime;
// create an array / object and assign the words
// const easyCollection = ["show", "some", "love"];

// create a random function to choose a word from the array / object
