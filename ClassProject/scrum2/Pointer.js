/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Pointer(){
    this.position;
    this.id;
    this.activeVisual;
    this.isActive = false;
}

Pointer.prototype.setPosition = function(position){
    this.position = position;
}

Pointer.prototype.getPosition = function(){
    return this.position;
}

Pointer.prototype.setId = function(id){
    this.id = id;
}

Pointer.prototype.getId = function(){
    return this.id;
}

Pointer.prototype.setActiveVisual = function(visual){
    this.activeVisual = visual;
}

Pointer.prototype.getActiveVisual = function(){
    return this.activeVisual;
}

Pointer.prototype.getActive = function(){
    return this.isActive;
}
Pointer.prototype.setActive = function(){
    this.isActive = true;
}

Pointer.prototype.deActive = function(){
    this.isActive = false;
}