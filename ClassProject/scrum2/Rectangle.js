Rectangle.prototype = new Shape();
Rectangle.constructor = Rectangle;
function Rectangle(){
    Shape.call(this);
}

Rectangle.prototype.drawPath = function(g){
    g.beginPath();
    g.rect(this.position.getX(), this.position.getY(), this.width,this.height);
    g.closePath();
    g.fill();
    g.stroke();
}

/*
 * var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
 
// the rectangle
context.beginPath();
context.rect(75, 100, 250, 150);
context.closePath();
 
// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();
 
// the fill color
context.fillStyle = "#51DCFF";
context.fill();
 */