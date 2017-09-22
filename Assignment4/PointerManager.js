/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function PointerManager(eleManager){
    this.pointers = [];
    this.eleManager = eleManager;
    
}
//loop through pointers - see if any hit visual

PointerManager.prototype.addPointer = function(pointer){
    this.pointers.push(pointer);
}

PointerManager.prototype.removePointer = function(id){
    for(var i = 0; i<this.pointers.length; i++){
        var currentPointer = this.pointers[i];
        if(currentPointer.getId() === id){
            this.pointers.splice(i, 1);
        }
    }
}

PointerManager.prototype.getPointerById = function(id){
    for(var i = 0; i<this.pointers.length; i++){
        var currentPointer = this.pointers[i];
        if(currentPointer.getId() === id){
            return this.pointers[i];
        }
    }
}

PointerManager.prototype.hitTest = function(){
    
       for(var i = 0; i<this.pointers.length; i++){
        var currentPointer = this.pointers[i];
        var pointerPos = currentPointer.getPosition();
        
        this.eleManager.isHit(currentPointer, pointerPos);
    }
}