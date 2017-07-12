frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

Getting started

# Program set-up

The Arcade Game Master is composed of three four main classes 
- app.js
    - This file contains the basic structure for structure for the the game
- engine.js
    - This file all element relative to how the game will render element on screen (the game engine)
- resource.js
    - An helper file that provide some methods to ease the manipulation of data structures in the engine
- index.html
    - Our presentation layer, that will encapsulate and manage all the calls to our Javascript classes

# How to play

Game objectives
*    The main objective of this game is to cross the scree and reach the water without touching the bugs

 Movement
*   The user avatar can move from one tile at a time using the arrow keys of its keyboard

  Collision
  *  If the user is in the same tile as a bug it will send back to its starting position
     