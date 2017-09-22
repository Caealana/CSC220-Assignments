/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//game loop will have an array of elements to go through and draw
SmithEnergyGameLoop.prototype = new GameLoop();
SmithEnergyGameLoop.constructor = SmithEnergyGameLoop;
function SmithEnergyGameLoop(){
    GameLoop.call(this);
    this.graphArea;
    this.pointerManager;
    this.canvas = document.getElementById("canvas");
    this.g = this.canvas.getContext("2d");
}

SmithEnergyGameLoop.prototype.setCanvasSize = function(width, height){
    this.canvas.width = width;
    this.canvas.height = height;
}

SmithEnergyGameLoop.prototype.getGraphArea = function(){
    return this.graphArea;
}

SmithEnergyGameLoop.prototype.addVisual= function(visual){
    this.graphArea.addVisual(visual);
}

SmithEnergyGameLoop.prototype.draw = function(g){ //g is canvas context
    this.graphArea.draw(g);
}

SmithEnergyGameLoop.prototype.update = function(){
   
}

SmithEnergyGameLoop.prototype.onPointerEnter = function(id, position){
    //when it enters canvas
    
    var pointer = new Pointer();
    pointer.setPosition(position);
    pointer.setId(id);
    this.pointerManager.addPointer(pointer);
}

SmithEnergyGameLoop.prototype.onPointerMove = function(id, position){
    //want to go through all of the pointers - if theyre active, 
    var pointer = this.pointerManager.getPointerById(id); //the pointer that moved
    pointer.setPosition(position);
    //console.log("moving");
    /*if(pointer.getActive() === true && 
            DraggableElement.prototype.isPrototypeOf(pointer.getActiveVisual())){
        var draggable = pointer.getActiveVisual();
        console.log(draggable.fillColor);
        var xDiff = draggable.getXDist();
        var yDiff = draggable.getYDist();
        var draggablePos = new Point((position.getX() - xDiff),
        (position.getY() - yDiff));
        draggable.setPosition(draggablePos);
        draggable.setBounds();
    }*/
}

SmithEnergyGameLoop.prototype.onPointerActivate = function(id,position){
   /*var pointer = this.pointerManager.getPointerById(id);
   pointer.setPosition(position);
   pointer.setActive();
   this.pointerManager.hitTest();*/
}

SmithEnergyGameLoop.prototype.onPointerDeactivate = function(id,position){
    //once we let go of the click, we dont want to drag anymore. get rid of linked visual
    //deactivate pointer
    var pointer = this.pointerManager.getPointerById(id);
    pointer.deActive();
    //pointer.setActiveVisual(null); 
}

SmithEnergyGameLoop.prototype.onPointerLeave = function(id, position){
    this.pointerManager.removePointer(id);
}

SmithEnergyGameLoop.prototype.initialize = function(canvas){
    this.canvas = canvas;
    this.isInputDebugModeEnabled = false;
    this.initializeGraphics();
    this.initializeInput();
    this.initializeTimer();
    this.graphArea = new SmithEnergyGraphArea(this.canvas);
    this.pointerManager = new PointerManager(this.graphArea);
}
