Ellipse.prototype = new Shape();
Ellipse.constructor = Ellipse;
function Ellipse(){
    Shape.call(this);
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