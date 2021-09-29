
## 🎃 Tic-Tac-Toe 👻


#### A Solo Front End Project by [Regan Losey](https://github.com/reganlosey).
#### Project Manager : [Heather Faerber](https://github.com/hfaerber)

<br>

#### Technologies Used:
###### 1. HTML
###### 2. CSS
###### 3. Javascript


<br>

#### Project Overview:

This project was a demonstration of my 6 weeks of cumulated skill in the study of Front End Web Development. The site hosts a classic game of Tic Tac Toe.The game plays just as any other game of Tic Tac Toe but with a fun Halloween themed spin.
The two players are assigned their respective tokens, the zombie emoji and the goblin emoji. The players will alternate their turns until either player's token occupies three consecutive cells.

<br>

#### Challenges:
 - At first, I had a lot of difficulty with trying to connect the visualization of the cells to the underlying logic. This was an essential obstacle to overcome as without this functionality, I was unable to evaluate any of the winning combinations.

 - The function to reset the board after a pre-determined timeout initially gave me a lot of trouble as it was interfering with the query selector that held the winning message display.

<br>

#### Wins:

- This project, as difficult as it was, really helped me put a lot of pieces together in the sense of connecting the data model to the DOM.

- The satisfaction of getting the draw function to fire was great. Initially the trouble was figuring out that the draw function needed to meet both conditions of the winning combination not being met *and* the turns taken being at a total of nine gave me some trouble at first.

- Playing with CSS was a lot of fun this time around, specifically once I had gotten all of the functionality in place and could actually play the game. Any time that I spent playing with the CSS before that point felt like productive procrastination.

- Getting the local storage to to store and retrieve the wins successfully was a huge weight off my shoulders as I knew that that was a crucial piece of not only the rubric, but also tying the entirety of the logic together. Local storage is still a bit of a mystery to me.

 <br>

#### Functionality:
- The game allows the user to:
  - Play a classic game of Tic Tac Toe.

  - Keep track of each player's and their respective wins as the game progresses. Upon the placing of a token, the occupying space cannot be replaced with the others player's token.

  - When a draw or win is reached, the board is disabled and will not allow for the placing of any additional tokens. Two seconds after the current match concludes, the board will reset and reflect each player's accumulated wins.

  - Restart the game and clear the win history with a click of the "Begin Again" button. After clicking, the amount of turns taken will be reset and the user will see that the wins of each player have been reset to 0.

<br>

#### Gameplay:
<img width ="1052" src="https://user-images.githubusercontent.com/82983696/135185891-856a62b8-068f-45f8-a110-a2987627d547.gif">

<br>

### Resources:

- [Github Repo](https://github.com/reganlosey/tic-tac-toe)

- [Project Spec Sheet](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)
