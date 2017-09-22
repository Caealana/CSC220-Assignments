function Circle(){


}


Circle.prototype = new Shape();


Circle.prototype.drawPath = function(g){
    var circle = this;
    TOOLS.drawEllipse(g, circle.getPosition().getX(),
    circle.getPosition().getY(),
    this.width, this.height);
    g.stroke();
    g.fill();
    
}





    
    



    