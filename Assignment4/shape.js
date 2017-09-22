/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Shape(){
    this.fillColor;
    this.strokeColor;
    this.strokeThickness;
    this.position;
    this.width;
    this.height;

    
    
}

Shape.prototype = new DraggableElement();


Shape.prototype.setFillColor = function(color){
    this.fillColor = color;
    
}



Shape.prototype.setStrokeColor = function(color){
    this.strokeColor = color;
    
}

Shape.prototype.setStrokeThickness = function(thickness){
    this.strokeThickness = thickness;
}



Shape.prototype.draw = function(g){// g is canvas context
    g.lineWidth = this.strokeThickness;
    g.fillStyle = this.fillColor;
    g.strokeStyle = this.strokeColor;
    
    var thisShape = this;
    var c = document.getElementById("canvas");
    var g = c.getContext("2d");
    
    this.drawPath(g);
}

Shape.prototype.drawPath = function(g){
    //overriden by particular shape
}
