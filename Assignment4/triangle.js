function Triangle(){
    
    
}

Triangle.prototype = new Shape();

Triangle.prototype.drawPath = function(g){
    //width, height, position
    
    //top point is (position.x +width/2, position.y)
    //left bottom point is (position.x, position.y +height)
    //bottom right point is (position.x+width, position.y+height)
    
    g.beginPath();
    var triangle = this;
    g.moveTo(triangle.getPosition().getX(),
        triangle.getPosition().getY() + triangle.getHeight());
    
    g.lineTo(triangle.getPosition().getX() + triangle.getWidth(),
        triangle.getPosition().getY() + triangle.getHeight());
    
    g.lineTo(triangle.getPosition().getX() + (triangle.getWidth()/2), 
                triangle.getPosition().getY());
                
    g.lineTo(triangle.getPosition().getX(), triangle.getPosition().getY()
            + triangle.getHeight());
    g.closePath();
    g.fill();
    g.stroke();
    
   
}



    