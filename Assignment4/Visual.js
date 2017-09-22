/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Visual(){
 this.width;
 this.height;
 this.position;
 
}


Visual.prototype.setPosition = function(point){
    this.position = point;
}

Visual.prototype.setWidth = function(width){
    this.width = width;
}

Visual.prototype.setHeight = function(height){
    this.height = height;
}

Visual.prototype.getHeight = function(){
    return this.height;
}

Visual.prototype.getWidth = function(){
    return this.width;
}

Visual.prototype.getPosition = function(){
    return this.position;
}

Visual.prototype.draw = function(g){
    
}

