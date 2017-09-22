function DraggableElement(){
    this.isActive = false;
    this.xFromPos;
    this.yFromPos;
    
}
DraggableElement.prototype = new HitTestableElement();

DraggableElement.prototype.setActive = function(){
    this.isActive = true;
}

DraggableElement.prototype.deactivate = function(){
    this.isActive = false;
}

DraggableElement.prototype.setDistFromPoint = function(point){
    var visual = this;
    var visualPos = this.getPosition();
    
    var xDifference = point.getX() - visualPos.getX();
    var yDifference = point.getY() - visualPos.getY();
    
    this.xFromPos = xDifference; //x difference between position and point of pointer contact
    this.yFromPos = yDifference;

}

DraggableElement.prototype.getXDist = function(){
    return this.xFromPos;
}

DraggableElement.prototype.getYDist = function(){
    return this.yFromPos;
}

//start drag
//move during drag
//end drag


//find the difference from one point click to as moving