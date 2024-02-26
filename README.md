# WORDLE+

## Game Description

- Wordle+ follows the game of wordle, with a few additional features (refer to the Next Steps session for more details).
- For the MVP version of wordle+, only the basic features are built.

### Instructions:

- Player will have 2 minutes and 5 attempts to guess a four-letter to win.
- For each guess, feedback will be provided on the game board.
- If the letters of the word match the exact positions as the correct word, the tiles of those letters will turn green.
- If the letters of the word do not match the exact position BUT are present in the correct word, the tiles of those letters will turn orange.

## Screenshots

### Start Game Popup:

- Player will have to input their name and click "start" to play the game.

![Introductory popup](/Images/Frame1_popup.png)

### Gameboard - Error Message:

- Player will not be able to submit a word containing more than 4 letters (maxlength of input is set to 4).
- If player tries to submit a word which contains less than 4 letters, an error message will show below the input in red.

![Error message](/Images/Frame2_errormessage.png)

### Gameboard - Guess The Word:

- When the player submits a word, that word will be reflected on the game board and feedback will be provided.
- If the tile of a letter is green, it means the letter of the word guessed is in the correct spot.
- If the tile of a letter is orange, it means the letter of the word guessed is not in the correct spot but present.
- If the tile of the letter is grey, it means the letter of the word guessed is not present.

![Gameboard](/Images/Frame3_gameboard.png)

### Game Outcomes:

- If the player guesses the correct word within 2 minutes, a popup will show to congratulate and prompt the player to continue to the next level.

![Winner popup](/Images/Frame4_winpopup.png)

- If the player uses up all 5 chances within the 2 minutes, a popup will show to inform that the player has lost and to prompt to restart the game.

![Loser popup](/Images/Frame5_losepopup.png)

- If the player is not able to guess the word within the 2 minutes, a popup will show to inform that the player has lost and to prompt to restart the game.

![Timeout popup](/Images/Frame6_timeoutpopup.png)

## Technologies Used:

Javascript, CSS and HTML are used to build wordle+.

## Deployed Game:

- To access wordle+, click [here](https://thisisanita.github.io/wordleplus/).
- Please input your name and click on the "start" button to play wordle+.
- Once the game is completed, a popup informing the game outcome will be triggered. Do note that the "restart game" and "continue" button is just for show as there is no event listeners attached to it. To attempt the game again, please refresh the page.

## Planned Future Enhancements

### Increasing the word count by 1 letter for each level:

- Everytime the player completes a level and moves on to the next, there will be an additional letter added to the word that the player must guess.
- There wil be no limit to the number of levels and the player will be able to keep guessing as long as there is a word in the english dictionary that contains that specified amount of letters.

### Word difficulty options:

- Before the player starts a game, an option will be provided to choose the difficulty of the words.
- There should be 3 difficulty options, easy, medium and hard. Easy words will consist of common words wheras hard words will consist of uncommon words.

### Hint regarding the word:

- Hints will be provided if the player is stuck at a level.
- An example of a hint (taken from online dictionaries) for the word "read" will be: " To look at words or symbols and understand what they mean"
- When the player decides to uses a hint, they will have to solve a addition mathematical question. The higher the level the player is in, the more complex the question.
- An example of a mathematical question will be: " What is 1.703394 + 1003.04 + 6?"
- While the player is solving the mathematical question, the clock will still be running.
- Only one hint will be provided at each level.

## References

- [Figma board for wireframes. I also used dev mode to customize the CSS for the game.](https://www.figma.com/file/QhpFizr80MlX11EOsqsXt9/Project-1-Wireframe?type=design&node-id=0%3A1&mode=design&t=tcyswhWhBbxiVFDB-1)
- <https://www.w3schools.com/howto/howto_js_popup.asp>
- <https://www.w3schools.com/howto/howto_js_countdown.asp>
- <https://daily-dev-tips.com/posts/vanilla-javascript-countdown/>
- <https://codingartistweb.com/2021/08/show-popup-automatically-after-page-load-using-javascript/>
- <https://www.linkedin.com/advice/3/how-can-you-create-pop-up-window-html-javascript-skills-html>
- <https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/>
- <https://www.w3schools.com/js/js_timing.asp>
- <https://www.w3schools.com/js/js_htmldom_nodes.asp>
- <https://www.w3docs.com/snippets/css/how-to-align-the-content-of-a-div-to-the-bottom.html>
- <https://www.codeinwp.com/snippets/change-placeholder-styles-html-inputs-with-css/#gref>
- <https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus>
- <https://www.shecodes.io/athena/23781-how-to-convert-a-string-to-lowercase-in-javascript#:~:text=To%20convert%20a%20string%20to%20lowercase%2C%20we%20can%20use,toLowerCase()%20method%20in%20JavaScript.&text=let%20myString%20%3D%20%22HeLLo%20WoRLD!,output%3A%20%22hello%20world!%22>
- <https://www.w3schools.com/howto/howto_css_overlay.asp>
- <https://www.w3schools.com/css/css3_fonts.asp>
- <https://www.w3schools.com/jsref/prop_element_children.asp>
- <https://stackoverflow.com/questions/70075733/i-get-the-uncaught-typeerror-cannot-read-properties-of-null-reading-addevent>
- <https://stackoverflow.com/questions/56923127/get-the-input-value-after-pressing-submit-button-in-javascript>
- Used the following prompts on google gemini:
  - To explain the countdown timer function provided by one of the website listed above.
  - To explain on how .childen work for html elements, if it possible for an element to have grandchildrens and how to access those grandchildrens.
