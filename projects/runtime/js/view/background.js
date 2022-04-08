var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y; 
         
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
      
      
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'navy');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
           
           for(var i = 0; i <= 1500; i++){
            var circle = draw.circle(.5,'white','LightGray',1);//stars
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
           }
           var moon = draw.bitmap('img/moon.png');//moon
           moon.x = 500;
           moon.y = 5;
           moon.scaleX = .50;
           moon.scaleY = .50;
           background.addChild(moon);
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why? bc we want the tree in front of the buildings
            for(var i=0;i<10;++i) {
                var buildingHeight = 300;
                var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
                building.x = 250*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
           
            
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = 1200;
            tree.y = 255;
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1;

            if(tree.x < -300) {
                tree.x = canvasWidth;   
            }
        
            
            
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++){
                buildings[i].x = buildings[i].x - 0.5 ; //moves the buildings to the left
                if (buildings[i].x < -100) { //creates an if statement thats activated when buildings' x position is equal to zero
                    buildings[i].x = canvasWidth + 200; //when a building moves off the left of the screen it moves it back to the right side 
                }
            
                // code to do something with each element
            }
                       
               
        } // end of update function - DO NOT DELETE
        
        
        
    /* Make a createjs Container for the background and let it know about the render and upate functions*/
    background = new createjs.Container();
    background.resize = render;
    background.update = update;
    
    /* make the background able to respond to resizing and timer updates*/
    app.addResizeable(background);
    app.addUpdateable(background);
    
    /* render and return the background */
    render();
    return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
