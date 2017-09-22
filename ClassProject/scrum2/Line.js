Line.prototype = new GraphVisual();
Line.constructor = Line;
function Line(){
    GraphVisual.call(this);
    this.p2;
}
/*Line.prototype.setP1 = function(p1){
    this.p1 = p1;
}*/

Line.prototype.setP2 = function(p2){
    this.p2 = p2;
}

/*Line.prototype.getP1 = function(){
    return this.position;
}*/

Line.prototype.getP2 = function(){
    return this.p2;
}




Line.prototype.drawPath = function(g){ //g is canvas context
    g.beginPath();
    g.moveTo(this.position.getX(), this.position.getY());
    g.lineTo(this.p2.getX(), this.p2.getY());
    g.closePath();
    g.stroke(); 
    console.log("drawing line");
    console.log(this.lineColor);
}

/*var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();
*/