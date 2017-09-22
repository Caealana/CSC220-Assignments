function VerticalText(){
    
}

VerticalText.prototype = new Text();
//x coord moves along y axis, y coord moves along x axis
VerticalText.prototype.drawPath = function(g){
    //code on rotating text - author:user631644, 
    //http://stackoverflow.com/questions/3167928/drawing-rotated
    //-text-on-a-html5-canvas
    g.save();
    //g.translate(newx, newy);
    g.rotate(-Math.PI/2);
    g.textAlign = "center";
    g.fillText(this.text, this.position.getX(), this.position.getY());
    g.restore();
}

/*var canvas = document.getElementById("canvas");
var g = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;


var vertText = new VerticalText();
vertText.setFillColor("black");
vertText.setPosition(new Point(-200, 200));
vertText.setText("boogawooga");
vertText.setFont("30px Arial");
vertText.draw(g);
vertText.drawPath(g);*/
