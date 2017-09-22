HorizontalText.prototype = new Text();
HorizontalText.constructor = HorizontalText;
function HorizontalText(){
    Text.call(this);
}

HorizontalText.prototype.drawPath = function(g){
    g.fillText(this.text,this.position.getX(),this.position.getY());
    console.log(this.position.getX());
    //g.restore();
}

