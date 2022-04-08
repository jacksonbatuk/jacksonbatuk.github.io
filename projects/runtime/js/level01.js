var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 100},
                { "type": "sawblade", "x": 1300, "y": groundY - 20},
                { "type": "sawblade", "x": 1700, "y": groundY - 30},
                { "type": "sawblade", "x": 2700, "y": groundY - 30},
                { "type": "sawblade", "x": 3650, "y": groundY - 30},
                { "type": "sawblade", "x": 6100, "y": groundY - 30},
                { "type": "sawblade", "x": 6570, "y": groundY - 30},
                { "type": "sawblade", "x": 6620, "y": groundY - 30},
                { "type": "sawblade", "x": 6660, "y": groundY - 30},
                { "type": "sawblade", "x": 6690, "y": groundY - 30},

                 { "type": "enemy", "x": 400, "y": groundY - 65},
                { "type": "enemy", "x": 1000, "y": groundY - 65},
                { "type": "enemy", "x": 1900, "y": groundY - 64},
                { "type": "enemy", "x": 2100, "y": groundY - 64},
                { "type": "enemy", "x": 2600, "y": groundY - 64},
                { "type": "enemy", "x": 3200, "y": groundY - 64},
                { "type": "enemy", "x": 3600, "y": groundY - 64},
                { "type": "enemy", "x": 3900, "y": groundY - 64},


                { "type": "boss", "x": 6700, "y": groundY - 120},
            

                { "type": "reward", "x": 3050, "y": groundY - 20},
                { "type": "reward", "x": 950, "y": groundY - 20},
                { "type": "reward", "x": 1400, "y": groundY - 22},
                { "type": "reward", "x": 2000, "y": groundY - 22},
                { "type": "reward", "x": 3600, "y": groundY - 22},
                { "type": "reward", "x": 2800, "y": groundY - 22},

            
            
            ]


        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
            var hitZoneSize = 15;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);



        function createSawBlade(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10; // sets the damage of the 
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap('img/bullet.png');
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.rotationalVelocity = 0;
        }
            


             function createReward(x, y){
                var reward = game.createGameItem('reward',25); // creating the game reward and storing it in the variable reward
                var images = draw.bitmap('img/orbs.png');
                images.x = 25; // sets the x position of the reward to -25 pixels.
                images.y = -25; // sets the y position of the reward to -25 pixels.
                reward.addChild(images); // add the blue square to the reward game item
    
                reward.x = x; // sets the x pos of the reward to x
                reward.y = y; // sets the y pos of the reward to y
    
                game.addGameItem(reward); // adds reward to the game
    
                reward.velocityX = -1; // causes the reward to move 1 pixel to the left on the x position
    
    
    
            reward.onPlayerCollision = function() { // creates a function in which the reward will collide with the player.
                console.log('The reward has hit Halle'); // the console will log this message as sson as the reward collides with the player
                game.changeIntegrity(10); // the collision will add 10 health 
                game.increaseScore(5); // the collision will add 5 points.
            };
    
            reward.onProjectileCollision = function() { // this function will do something after the players projectile hits the reward.
                console.log('The projectile has hit Halle'); // the console will print this message after the projectile collides with the reward.
                game.changeIntegrity(0); // increases health by 5.
                game.increaseScore(15); // increases score by 5.
                reward.fadeOut(4); // the reward will fade out upon collision.
            };
            }

        function createEnemy(x, y){
            
                var enemy = game.createGameItem('enemy',25); // creating the game enemy and storing it in the variable enemy
                var redSquare = draw.bitmap('img/enemy.png'); // creates triangle and stores as redSquare
                redSquare.x = -25; // the x position for the enemy is set to -25 pixels
                redSquare.y = -25; // the y position for the enemy is set to -25 pixels
                enemy.addChild(redSquare); // add the red square to the enemy game item
    
                enemy.x = x; // x pos of enemy is set to x
                enemy.y = y; // y pos of enemy is set to y
    
                game.addGameItem(enemy); // adds enemy to the game
    
                enemy.velocityX = -1; // causes the enemy to move 1 pixel to the left on the x position
    
    
                enemy.onPlayerCollision = function() { // function that will do something after the enemy collides with the player
                    console.log('The enemy has hit Halle'); // the console will print this message after the enemy hits the player
                    game.changeIntegrity(-10); // the player loses 10 health upon collision
    
            };
        
                enemy.onProjectileCollision = function() { // function that will do something after a projectile hits the enemy
                    console.log('The projectile has hit Halle'); // the console will print this message upon collision
                    game.changeIntegrity(0); // the player gains 5 health upon collision
                    game.increaseScore(50); // score will increase by 5 upon collision
                    enemy.fadeOut(); // enemy will fade out upon collison
                };
            }

            function createBoss(x, y){
                
                var boss = game.createGameItem('boss',25); // creating the game enemy and storing it in the variable enemy
                var boss2 = draw.bitmap('img/Boss.png'); // creates triangle and stores as redSquare
                boss.x = -25; // the x position for the enemy is set to -25 pixels
                boss.y = -25; // the y position for the enemy is set to -25 pixels
                boss.addChild(boss2); // add the red square to the enemy game item
    
                boss.x = x; // x pos of enemy is set to x
                boss.y = y; // y pos of enemy is set to y
    
                game.addGameItem(boss); // adds enemy to the game
    
                boss.velocityX = -2; // causes the enemy to move 1 pixel to the left on the x position
    
    
                boss.onPlayerCollision = function() { // function that will do something after the enemy collides with the player
                    console.log('The enemy has hit Halle'); // the console will print this message after the enemy hits the player
                    game.changeIntegrity(-1000); // the player loses 10 health upon collision
    
            };
        
                boss.onProjectileCollision = function() { // function that will do something after a projectile hits the enemy
                    console.log('The projectile has hit Halle'); // the console will print this message upon collision
                    game.changeIntegrity(100); // the player gains 5 health upon collision
                    game.increaseScore(1000); // score will increase by 5 upon collision
                    boss.fadeOut(); // enemy will fade out upon collison
                };
            }

            for (var i = 0; i < levelData.gameItems.length; i++){ 
                var gameItem = levelData.gameItems[i];
 
 
             if (gameItem.type === "sawblade"){
                     createSawBlade(gameItem.x, gameItem.y);
             }
             if (gameItem.type === "enemy"){
                     createEnemy(gameItem.x, gameItem.y);
             }
             if(gameItem.type === "boss"){
                createBoss(gameItem.x, gameItem.y);
             }
             if (gameItem.type === "reward"){
                     createReward(gameItem.x, gameItem.y);
             }
         }








        // DO NOT EDIT CODE BELOW HERE
                }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
    }
