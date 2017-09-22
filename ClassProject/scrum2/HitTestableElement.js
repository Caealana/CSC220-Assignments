HitTestableElement.prototype = new GraphVisual();
HitTestableElement.constructor = HitTestableElement;
function HitTestableElement(){
    GraphVisual.call(this);
    this.bounds;
}

HitTestableElement.prototype.setBounds = function(){
    var visual;
    visual = this;
    this.bounds = { minX: visual.getPosition().getX(),
        minY: visual.getPosition().getY(), 
        maxX: visual.getPosition().getX() + visual.getWidth(),
        maxY: visual.getPosition().getY() + visual.getHeight()};
}



HitTestableElement.prototype.isHit = function(coordinates){
    //returns true or false if the coordinates of the pointer are within the hit area
    
    if(coordinates.getX() >= this.bounds.minX
            && coordinates.getX() <= this.bounds.maxX
            && coordinates.getY() >= this.bounds.minY
            && coordinates.getY() <= this.bounds.maxY){
        
        return true;
    }
    
    else{
        return false;
    }
}


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


