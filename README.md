# WORDLE+

### Game Description

- Wordle+ follows the game of wordle, with a few additional features (refer to the Next Steps session for more details).
- For the MVP version of wordle+, only the basic features are built.

## Instructions

- Player will have 2 minutes and 5 attempts to guess a four-letter to win.
- For each guess, feedback will be provided on the game board.
- If the letters of the word match the exact positions as the correct word, the tiles of those letters will turn green.
- If the letters of the word do not match the exact position BUT are present in the correct word, the tiles of those letters will turn orange.

## Screenshots

### Frame 1
Player will have to input their name and click "start" to play the game.
![Introductory popup](/Images/Frame1_popup.png)

### Frame 2
Player will not be able to submit a word containing more than 4 letters (maxlength of input is set to 4).
If player tries to submit a word which contains less than 4 letters, an error message will show below the the input in red. 
!(/Images/Frame2_errormessage.png)

### Frame 3
When the player submits a word, the word will be reflected on the game board and feedback will be provided. 
If the tile of a letter is green, it means the letter of the word guessed is in the correct spot.
If the tile of a letter is orange, it means the letter of the word guessed is not in the correct spot but present.
If the tile of the letter is grey, it means the letter of the word guessed is not present.
!(/Images/Frame3_gameboard.png)



## Technologies Used:

Javascript, CSS and HTML are used to build wordle+.

## Deployed Game

- To access wordle+, click [here] (https://thisisanita.github.io/wordleplus/).
- Please input your name and click on the "start" button to play wordle+.
- Once the game is completed, a popup informing the game outcome will be triggered. Do note that the "restart game" and "continue" button is just for show as there is no event listeners attached to it. To attempt the game again, please refresh the page.
