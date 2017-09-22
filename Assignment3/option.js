/* Sabina Sayasith
 * Option class for selector
 */
var canvas;
var ctx;
function Option(name, xPos, yPos, width, height, stopY){
    this.name = name;
    this.xPos = yPos;
    this.yPos = yPos;
    this.stopY = stopY; //the Yposition to stop at when animation is done
    this.width = width;
    this.height = height;
    this.function; //function to run when clicked
    this.boxColor = "#66CCFF";
    this.textColor = "black";
    canvas = document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
}

/*Option.prototype.calcSize = function(){
    this.width = Math.ceil(screen.height/6)
    this.height = Math.ceil(screen.height/25)
}*/

Option.prototype.getPosition = function(){
    var position = {
        x : this.xPos,
        y : this.yPos
    }
    return position;
}

Option.prototype.setPosition = function(newX, newY){
    this.x = newX;
    this.y = newY;
}

Option.prototype.setY = function(newY){
    this.y = newY;
}

Option.prototype.getStopY = function(){
    return this.stopY;
}

Option.prototype.draw = function(){
    ctx.fillStyle = this.boxColor;
    ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
    ctx.fillStyle = this.textColor;
    ctx.font = "15px Arial";
    ctx.fillText(this.name,this.xPos+this.width/4,this.yPos+this.height/2);
    
}


Option.prototype.update = function(newY){
    
        this.yPos = newY;
    
}


//each option object is a rectangle in canvas with text
//has position of rect, position of text, what text is in the option, color
//size of rect, size of text