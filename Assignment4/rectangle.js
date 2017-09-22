/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Rectangle(){

    
}

Rectangle.prototype = new Shape();



Rectangle.prototype.drawPath = function(g){
    
    g.rect(this.position.x, this.position.y, this.width,this.height);
    g.fill();
    g.stroke();
    
}