/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//selector keeps a list of all the options...and looks out for when the first
//box is clicked to drop down

//controls the position where each box option stops.
//selector manages all the options
var canvas;
var ctx;

function Selector(category, startX, startY, height,
    width, optionNames){ //optionArray contains names of all the options
    this.category = category;
    this.isOpen = false;
    this.startX = startX;
    this.startY = startY;
    this.height = height;
    this.width = width;
    this.speed = 2;
    this.optionNames = optionNames;
    this.options = [];
    this.color = "#0099FF";
    this.textColor = "black";
    canvas = document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    
}

Selector.setPosition = function(x, y){
    this.startX = x;
    this.starty = y;
}

Selector.prototype.getOpen = function(){
    return this.isOpen;
}

Selector.prototype.setOpen = function(isOpen){
    this.isOpen = isOpen;
}
Selector.prototype.getX = function(){
    return this.startX;
}

Selector.prototype.getY = function(){
    return this.startY;
}

Selector.prototype.getWidth = function(){
    return this.width;
}

Selector.prototype.getHeight = function(){
    return this.height;
}



Selector.prototype.initialize = function(){
    //create starting click box
    
    
    var xPos = this.startX;
    var yPos = this.startY;
    //create array of option objects
    for(var i = 0; i < this.optionNames.length; i++){
        var newOption = new Option(this.optionNames[i], xPos, yPos, 
        this.width, this.height, (yPos+(i+1)*(this.height)))
        //yPos = yPos + this.height; starting yPos should be same as first box though
        this.options.push(newOption);
    }
    

    //draw options before startBox
   
    //draw the first option last...the rectangles stack on top of each other
    //actually we don't even need to draw the options yet...
    
    //draw the title box on last so that's what we see

}

 Selector.prototype.rollDown = function(){
         for(var i = 0; i<this.options.length; i++){
            var currentOption = this.options[i];
            var newY = currentOption.getPosition().y + this.speed;
            if(newY<=currentOption.getStopY()) {
               currentOption.update(newY);
               
           }
           
           else{
               if(i === this.options.length-1){
                   this.isOpen = true;
                   
               }
           }
           
          
        }
     
    
 }
 
 Selector.prototype.rollUp = function(){
        for(var i = 0; i<this.options.length; i++){
            var currentOption = this.options[i];
            var newY = currentOption.getPosition().y - this.speed;
            
            if(newY >= this.startY){
                currentOption.update(newY);
                
                
            }
            
            else{
                if(i === this.options.length-1){
                    this.isOpen === false;
                }
            }
          
     
            }
 }
 
 Selector.prototype.draw = function(){
     for(var i = this.options.length-1; i>-1; i--){
        var currentOption = this.options[i];
        currentOption.draw();
     
    }
    
    ctx.fillStyle = this.color;
    ctx.fillRect(this.startX,this.startY,this.width,this.height);
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    ctx.fillText(this.category,this.startX+this.startY/2,
    this.startY+this.height/2);
    
    
 }


/*Selector.prototype.addOption = function(name){
    var xPos = this.startX;
    var yPos = this.startY + this.height + 5;
    var newOption = new Option(name, xPos, yPos, this.width, this.height);
    this.options.push(name);
}*/

function InteractiveSelector() {
        
    var choices = ["Amherst", "Northampton", "Easthampton"];
    this.selector = new Selector("dataSet", 120, 120, 75, 200, choices);
    this.selector.initialize();
    this.firstOpen = true;
    
    
}

InteractiveSelector.prototype = new GameEngine();


InteractiveSelector.prototype.updateUp = function(){

    this.selector.rollUp();

}

InteractiveSelector.prototype.updateDown = function(){
    this.selector.rollDown();
}


InteractiveSelector.prototype.onMouseClick = function(position) {
    if(position.x > this.selector.getX() &&
       position.x < this.selector.getX() + this.selector.getWidth() &&
       position.y > this.selector.getY() &&
       position.y < this.selector.getY() + this.selector.getHeight()){
       

        var gameEng = this;
        if(this.selector.getOpen()===true){
            clearInterval(this.openAnimation);
            gameEng.initializeTimerUp();
        }
        
        else if(this.selector.getOpen() === false){
            
            if(this.firstOpen === false){
                clearInterval(this.openAnimation);
                console.log("clear");
                
            }
            
            gameEng.initializeTimerDown();
            this.firstOpen = false;
            
        }
        
        
   
    
    
    }
}

InteractiveSelector.prototype.draw = function() {
        this.selector.draw();
}

function initialize() {
    var animatedMenu = new InteractiveSelector();
    animatedMenu.initialize(document.getElementById("myCanvas"));
    animatedMenu.draw();
    
}

window.onload = initialize;