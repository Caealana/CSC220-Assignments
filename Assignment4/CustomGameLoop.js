/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//game loop will have an array of elements to go through and draw

function CustomGameLoop(){
    this.eleManager;
    this.pointerManager;
    this.c = document.getElementById("canvas");
    this.g = this.c.getContext("2d");
    this.eleManager = new ElementManager();
    this.pointerManager = new PointerManager(this.eleManager);
}

CustomGameLoop.prototype = new GameLoop();

CustomGameLoop.prototype.setCanvasSize = function(width, height){
    this.c.width = width;
    this.c.height = height;
}

CustomGameLoop.prototype.addElement= function(element){
    this.eleManager.addElement(element);
}

CustomGameLoop.prototype.draw = function(g){ //g is canvas context
    this.eleManager.draw(g);

}

CustomGameLoop.prototype.update = function(){
    
}





CustomGameLoop.prototype.onPointerEnter = function(id, position){
    //when it enters canvas
    
    var pointer = new Pointer();
    pointer.setPosition(position);
    pointer.setId(id);
    this.pointerManager.addPointer(pointer);
}

CustomGameLoop.prototype.onPointerMove = function(id, position){
    //want to go through all of the pointers - if theyre active, 
    var pointer = this.pointerManager.getPointerById(id); //the pointer that moved
    pointer.setPosition(position);
    console.log("moving");
    
    if(pointer.getActive() === true && 
            DraggableElement.prototype.isPrototypeOf(pointer.getActiveVisual())){
        var draggable = pointer.getActiveVisual();
        console.log(draggable.fillColor);
        var xDiff = draggable.getXDist();
        var yDiff = draggable.getYDist();
        var draggablePos = new Point((position.getX() - xDiff),
        (position.getY() - yDiff));
        draggable.setPosition(draggablePos);
        draggable.setBounds();
    }
    
}

CustomGameLoop.prototype.onPointerActivate = function(id,position){
   var pointer = this.pointerManager.getPointerById(id);
   pointer.setPosition(position);
   pointer.setActive();
   this.pointerManager.hitTest();

   //we want to link the pointer up with the visual it is on if it hit tests positive
   
   
}

CustomGameLoop.prototype.onPointerDeactivate = function(id,position){
    //once we let go of the click, we dont want to drag anymore. get rid of linked visual
    //deactivate pointer
    
    var pointer = this.pointerManager.getPointerById(id);
    pointer.deActive();
    pointer.setActiveVisual(null);
    
}

CustomGameLoop.prototype.onPointerLeave = function(id, position){
    this.pointerManager.removePointer(id);
}
