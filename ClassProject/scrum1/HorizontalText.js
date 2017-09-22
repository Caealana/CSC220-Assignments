function HorizontalText(){
    this.position;
}

HorizontalText.prototype = new Text();

HorizontalText.prototype.drawPath = function(g){
    g.fillText(this.text,this.position.getX(),this.position.getY());
    console.log(this.position.getX());
}

