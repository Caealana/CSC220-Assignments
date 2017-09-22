Shape.prototype = new HitTestableElement();
Shape.constructor = Shape;
function Shape(){
    HitTestableElement.call(this);
    this.width;
    this.height;
}

Shape.prototype.setHeight = function(height){
    this.height = height;
}

Shape.prototype.setWidth = function(width){
    this.width = width;
}

Shape.prototype.getHeight = function(){
    return this.height;
}

Shape.prototype.getWidth = function(){
    return this.width;
}