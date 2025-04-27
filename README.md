# gameSimonSays
Simon Says Game 🎮
This is a simple Simon Says game made with HTML, CSS, and JavaScript.

The goal is to follow and repeat the sequence of colors shown by the game.
Each level, a new color is added to the sequence, and you must remember and click the colors in the correct order!

How to Play
Start the Game

Press any key on the keyboard to start the game.

Watch the Sequence

The game will flash a block (color).

Memorize the order of flashes.

Repeat the Sequence

Click the blocks in the same order.

If you click wrong, the game will end.

Level Up

If you repeat correctly, you advance to the next level, and a new block will be added to the sequence.

Project Structure
/ (root)
│
├── index.html   # The main HTML page
├── style.css    # Styling for the game
└── app.js       # Game logic (JavaScript)

Key Features
Random Color Selection: A random color is chosen each level.

Flashing Effect: Visual indication for both game sequence and player clicks.

Level Tracking: Shows the current level at the top.

Game Over Handling: Displays "wrong game over" when a wrong block is clicked and resets the game.

Important Notes
The color buttons are created using div elements styled with CSS.

The game starts with a keypress (not a button click).

The random color is selected with Math.random() and added to the game's sequence array.

If the player fails to match the sequence, the game resets automatically.

Future Improvements (optional ideas)
Add a restart button.

Add sound effects for button presses and game over.

Make the game mobile-friendly.

Animate the level-up sequence.
