//will have draw function
function GraphVisual(){
    this.fillColor = undefined;
    this.lineColor = undefined;
    this.lineWidth = undefined;
    this.position = undefined;
}

GraphVisual.prototype.setPosition = function(pos){
    this.position = pos;
}

GraphVisual.prototype.setFillColor = function(color){
    this.fillColor = color;
}

GraphVisual.prototype.setLineColor = function(color){
    this.lineColor = color;
}

GraphVisual.prototype.setLineWidth = function(width){
    this.lineWidth = width;
}

GraphVisual.prototype.getPosition = function(){
    return this.position;
}

GraphVisual.prototype.getFillColor = function(){
    return this.fillColor;
}

GraphVisual.prototype.getLineColor = function(){
    return this.lineColor;
}

GraphVisual.prototype.getLineWidth = function(){
    return this.lineWidth;
}

GraphVisual.prototype.draw = function(g){
    g.strokeStyle = this.lineColor;
    g.fillStyle = this.fillColor;
    console.log(this.fillColor);
    g.lineWidth = this.lineWidth;
    
}

