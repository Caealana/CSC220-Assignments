/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ele manager cycles through array of elements

function ElementManager(){ //will keep an array of elements and cycle through to draw
    this.eleArray = [];
    this.hitTestables = [];
}

ElementManager.prototype.addElement = function(newEle){
    this.eleArray.push(newEle);
    if(DraggableElement.prototype.isPrototypeOf(newEle)){
        this.hitTestables.push(newEle);
        newEle.setBounds();
        
    }
    console.log(this.hitTestables);
        
}

//
ElementManager.prototype.isHit = function(pointer, position){ //takes in a position point and sees
    //if it hit any of the visual objects. 
    //onPointerActivate
    var pointerPos = position;
    
    for(var i = this.hitTestables.length-1; i >= 0; i--){
        if(this.hitTestables[i].isHit(position)){ //goes through array of elements
            var activeVisual = this.hitTestables[i]; //if ele is hit
            activeVisual.setActive();
            activeVisual.setDistFromPoint(position);
            
            this.activeEle.push(activeVisual);  
            pointer.setActiveVisual(activeVisual); //give the corresponding pointer the visual that links to it
            return true;
        }
        
        else if( i === this.eleArray.length - 1){
            return false;
        }
    }
}

/*ElementManager.prototype.updatePos = function(pointerPos){ //position should follow pointer position
    for(var i = 0; i<this.activeEle.length; i++){
        this.activeEle[i];
    }
}*/

ElementManager.prototype.draw = function(g){
   
    for(var i = 0; i<this.eleArray.length; i++){
        var currentEle = this.eleArray[i];
        
        currentEle.draw(g);
        
    }
}

