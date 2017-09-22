/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function BackgroundImage(){
   var image = new Image();
   this.image = image;
    
    
}

BackgroundImage.prototype = new Visual();

BackgroundImage.prototype.loadUrl = function(file){
    var myImage = this.image;
    myImage.src = file;
    //window.onload = function(){myImage.src = file};
    
}

BackgroundImage.prototype.draw = function(g){
    var myImage = this.image;
    var visualObj = this;
    
    
     /*myImage.onload = function ()
        {
            console.log("image loaded");
            g.drawImage(myImage, visualObj.getPosition().getX(),
            visualObj.getPosition().getY(),
            visualObj.getWidth(), visualObj.getHeight());
        }*/
        
        g.drawImage(myImage, visualObj.getPosition().getX(),
            visualObj.getPosition().getY(),
            visualObj.getWidth(), visualObj.getHeight());
        
   
}

