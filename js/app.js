// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.xstep = 101;
    this.ystep = 83;

    this.xmax = 404;
    this.xmin = 0;

    this.ymax = 83*5; 
    this.ymin = 0; 

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.xmax) {
        this.x = this.x + this.xstep * dt;
    }
    else {
        this.resetX();
    }
};

Enemy.prototype.resetX = function () {
        this.x = 0;
};

Enemy.prototype.resetY = function () {
        this.y = 0;
};

Enemy.prototype.reset = function () {
       this.resetX(); 
       this.resetY(); 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//The player's avatar in the game
var Player = function (x, y) {
    Enemy.call(this, x, y);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

Player.prototype.handleInput = function (key) {

    switch (key) {
        case 'left':
            if (this.x > this.xmin) {
                this.x = this.x - this.xstep;
            }
            break;
        case 'up':
            if ( this.y > this.ymin) {
                this.y = this.y - this.ystep;
            }
            break;
        case 'right':
            if (this.x < this.xmax) {
                this.x = this.x + this.xstep;
            }
            break;
        case 'down':
            if (this.y < this.ymax) {
                this.y = this.y + this.ystep;
            }
            break;
        default:
    }

};

Player.prototype.update = function () {
    
}; 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(303, this.ystep * 4);
var allEnemies = [new Enemy(202, this.ystep * 3),new Enemy(101, this.ystep * 2), new Enemy(303, this.ystep * 1 )];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
