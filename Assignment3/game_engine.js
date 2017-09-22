/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function GameEngine() {
    this.openAnimation;
    
}

GameEngine.prototype.initializeGraphics = function() {
    
    this.g = this.canvas.getContext("2d");
    this.canvas.width = 800;
    this.canvas.height = 800;
}

GameEngine.prototype.initializeInput = function() {
    this.canvas.associatedGameEngine = this;
    this.canvas.onmousemove = function(e) {
        var localCoordinate = 
                this.associatedGameEngine.getLocalCanvasCoordinates(e);
        this.associatedGameEngine.onMouseMove(localCoordinate);
    }
    this.canvas.onclick = function(e) {
        var localCoordinate = 
                this.associatedGameEngine.getLocalCanvasCoordinates(e);
        this.associatedGameEngine.onMouseClick(localCoordinate);
        //this.initializeTimer();
    }
}

GameEngine.prototype.getLocalCanvasCoordinates = function(e) {
    
    var offset = this.canvas.getBoundingClientRect();
    var positionOnCanvas = {
        x : e.clientX - offset.left,
        y : e.clientY - offset.top
    }
    return positionOnCanvas;
}

GameEngine.prototype.onMouseClick = function(position) {
}

GameEngine.prototype.onMouseMove = function(position) {
    // override
}

GameEngine.prototype.initializeTimerUp = function() {
    var engine = this;
    
    this.openAnimation = setInterval(function() {
        engine.onTimerTickUp();
    }, 1);
}

GameEngine.prototype.initializeTimerDown = function() {
    var engine = this;
    
    this.openAnimation = setInterval(function() {
        engine.onTimerTickDown();
    }, 1);
}

GameEngine.prototype.onTimerTickUp = function() {

    this.updateUp();
    this.clear(this.g);
    this.draw();
}

GameEngine.prototype.onTimerTickDown = function() {

    this.updateDown();
    this.clear(this.g);
    this.draw();
}

GameEngine.prototype.clear = function(g) {
    g.fillStyle = "white";
    g.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

GameEngine.prototype.update = function(elapsedMilliseconds) {
    // override
}

GameEngine.prototype.draw = function(g) {
    // override
}

GameEngine.prototype.initialize = function(canvas) {
    this.canvas = canvas;
    this.initializeGraphics();
    this.initializeInput();
    //this.initializeTimer();
}

var engineTest = new GameEngine();
engineTest.initialize(document.getElementById("myCanvas"));
