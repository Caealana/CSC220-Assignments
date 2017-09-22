

function Ellipse(){
   this.width;
   this.height;
}

Ellipse.prototype = new GraphVisual();

Ellipse.prototype.setHeight = function(height){
    this.height = height;
}

Ellipse.prototype.setWidth = function(width){
    this.width = width;
}

Ellipse.prototype.drawPath = function(g){
    TOOLS.drawEllipse(g, this.position.getX(), this.position.getY(),
    this.width, this.height);
    g.stroke();
    g.fill();
}


/*
 * TOOLS.drawEllipse(document.getElementById("canvas").getContext("2d"), 75, 55, 100, 100);
document.getElementById("canvas").getContext("2d").stroke();
document.getElementById("canvas").getContext("2d").fill();
 */