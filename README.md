# WORDLE+

### Game Description

- Wordle+ follows the game of wordle, with a few additional features (refer to the Next Steps session for more details).
- For the MVP version of wordle+, only the basic features are built.

### Instructions

- Player will have 2 minutes and 5 attempts to guess a four-letter to win.
- For each guess, feedback will be provided on the game board.
- If the letters of the word match the exact positions as the correct word, the tiles of those letters will turn green.
- If the letters of the word do not match the exact position BUT are present in the correct word, the tiles of those letters will turn orange.

## Screenshots

### Start Game Popup

- Player will have to input their name and click "start" to play the game.

![Introductory popup](/Images/Frame1_popup.png)

### Gameboard - Error Message

- Player will not be able to submit a word containing more than 4 letters (maxlength of input is set to 4).
- If player tries to submit a word which contains less than 4 letters, an error message will show below the the input in red.

![Error message](/Images/Frame2_errormessage.png)

### Gameboard - Guess The Word

- When the player submits a word, the word will be reflected on the game board and feedback will be provided.
- If the tile of a letter is green, it means the letter of the word guessed is in the correct spot.
- If the tile of a letter is orange, it means the letter of the word guessed is not in the correct spot but present.
- If the tile of the letter is grey, it means the letter of the word guessed is not present.

![Gameboard](/Images/Frame3_gameboard.png)

### Game Outcomes

- If the player guesses the correct word within 2 minutes, a popup will show to congratulate and prompt the player to continue to the next level.

![Winner popup](/Images/Frame4_winpopup.png)

- If the player uses up all 5 chances within the 2 minutes, a popup will show to inform that the player has lost and to prompt to restart the game.

![Loser popup](/Images/Frame5_losepopup.png)

- If the player is not able to guess the word within the 2 minutes, a popup will show to inform that the player has lost and to prompt to restart the game.

![Timeout popup](/Images/Frame6_timeoutpopup.png)

## Technologies Used:

Javascript, CSS and HTML are used to build wordle+.

## Deployed Game

- To access wordle+, click [here] (https://thisisanita.github.io/wordleplus/).
- Please input your name and click on the "start" button to play wordle+.
- Once the game is completed, a popup informing the game outcome will be triggered. Do note that the "restart game" and "continue" button is just for show as there is no event listeners attached to it. To attempt the game again, please refresh the page.

## Next Steps

### Increasing the word count by 1 letter for each level

- Everytime the player completes a level and moves on to the next, there will be an additional letter added to the word that the player must guess.
- There wil be no limit to the number of levels and the player will be able to keep guessing as long as there is a word in the english dictionary that contains that specified amount of letters

### Word difficulty options

- Before the player starts a game, an option will be provided to choose the difficulty of the words.
- There should be 3 difficulty options, easy, medium and hard. Easy words will consist of common words wheras hard words will consist of uncommon words.

### Hint to progress levels

- Hints will be provided if the player is stuck at a level.
- An example of a hint (taken from online dictionaries) for the word "read" will be: " To look at words or symbols and understand what they mean"
- When the player decides to uses a hint, they will have to solve a addition mathematical question. The higher the level the player is in, the more complex the question.
- While the player is solving the mathematical question, the clock will still be running.

## References
