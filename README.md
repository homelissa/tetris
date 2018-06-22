# Tetris.

[Live Demo](https://homelissa.github.io/tetris/)

## Background and Overview

Tetris is a tile matching puzzle game. Each turn, the player receives a random puzzle piece, and the goal is to arrange the pieces so that a row on the board is completely occupied and thus clears from the board. Bonus points are given for clearing multiple rows at the same time. The game is over when the player is unable to clear any more rows.

[![Screen_Shot_2018-06-15_at_2.27.16_PM.png](https://lh3.googleusercontent.com/QOiZL14n6J44EKY7BDNK7jc7RuASHBsi_W7LDV5eOxWb1eqLsjFcYn0umtUY3UhhDjzp-zOH4RKqnwR9eIgSvOvVj9vyUZ6iurkNY_CzIIjbe5MW_l1jVQsZcu9IyJlf_OpFCBDOPbpGcN2bDotvEgzvquSkUUoDbzP-630Chjh7YRfXPTdrmcJvInEjcZkNg7mWHOXALrcW1IKzjfpBHWKqYyFWy7EyfgCl555Ju7sYqoG9RtU78ccE6xTxSpOLEVGyB2V-k55seyJahPZ19JrHTOXBM9GB9_tqBfvYeLG24g_d7UiW6G973hkDbWCKk5tnhheJMey9p9B7W5kylrEnY7ngeMzwmUSmSe0Dvfzn8IK0Lp3ZFSRjqh5XMg1w2vRhUU2i4LiQPzoDiBYl6M_hNeCPaPTMGB8arkcHdVRFxthwPfvbwmMGKSI9y6Kmh487uY0JfqhK9EEk7Tm7F9Hi5NlkrEuKpws5scGHyFJSu04VF5eycutM88bkrrtW3DrxtscupteExSPDgjb1bVulpsT0GDbqbfi3f9kGpwXdXJNOkKYOJNLfGYm13GqVK0VKeORK8fVeox4_UuMPvxsYk_Yp8uO0KbkSH0Y=w1466-h1284-no)


## Functionality and MVP
In Tetris, players will be able to:
* See instructions for the game.
* Click to start the game when ready.
* Clear rows to earn points.
* Use the keyboard to move and rotate puzzle pieces.

## Code Highlights
I implemented an algorithm that iterates through the board matrix and tetris pieces and draws the game screen. Each tetris piece is filled with its respective shape color.

```javascript

draw() {
  this.ctx.clearRect(0, 0, 10, 18);

  this.board.matrix.forEach((row, idx) => {
    row.forEach((value, idx2) => {
      if (value === 0) {
        this.ctx.fillStyle = 'rgb(36, 36, 36)';
      } else {
        this.ctx.fillStyle = this.colors[value];
      }
      this.ctx.fillRect(idx2, idx, 1, 1);
    });
  });

  this.piece.shape.forEach((row, idx) => {
    row.forEach((value, idx2) => {
      if (value !== 0) {
        this.ctx.fillStyle = this.colors[value];
        this.ctx.fillRect(idx2 + this.piece.position.x, idx + this.piece.position.y, 1, 1);
      }
    });
  });


}

```


## Wireframes
This app will consist of a single screen. The player's board will be displayed on the left. The next puzzle piece and the score will be displayed on the right.

[![tetris.png](https://s15.postimg.cc/mgx021t0r/tetris.png)](https://postimg.cc/image/d94rlclyf/)

## Architecture and Technologies
* Vanilla Javascript
* HTML5 Canvas
* CSS for styling

## Implementation Timeline

Over the weekend: Create project proposal and plan out architecture
* Familiarize with Canvas
* Lay out the JS classes and interactions.

Day 1: Board setup
* Create a board class
* Create a piece class

Day 2: Gameflow
* Add keyboard control for rotating and moving puzzle pieces
* Add logic for row-clearing

Day 3: Game
* Create button for starting game
* Implement scoring

Day 4: Styling
* Game will be aesthetically pleasing

## Future Plans

* Add music
* Add levels - pieces fall at increasing speed as players level up
