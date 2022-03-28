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
                { "type": "sawblade", "x": 400, "y": groundY - 50},
                { "type": "sawblade", "x": 600, "y": groundY - 50},
                { "type": "sawblade", "x": 900, "y": groundY - 50},

                 { "type": "enemy", "x": 400, "y": groundY - 50},
                { "type": "enemy", "x": 600, "y": groundY - 50},
                { "type": "enemy", "x": 900, "y": groundY - 50},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y){
            var hitZoneSize = 25;
            var damageFromObsticle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.rotationalVelocity = 5;
        }
             createSawBlade(400, 345);
             createSawBlade(600, 345);
             createSawBlade(800, 345);

             function createEnemy(x, y){
            var hitZoneSize = 25;
            var damageFromObsticle = 10;
            var enemyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            enemyHitZone.x = x;
            enemyHitZone.y = y;
            game.addGameItem(enemyHitZone);

            var obstacleImage = draw.bitmap('img/enemy.png');
            enemyHitZone.addChild(obstacleImage);

            obstacleImage.x = -25;
            obstacleImage.y = -25;
            enemyHitZone.rotationalVelocity = 0;
        }



        var enemy = game.creatGameItem("enemy", 25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
