Text.prototype = new GraphVisual();
Text.constructor = Text;
function Text(){
    GraphVisual.call(this);
    this.text;
    this.font;   
}
Text.prototype.setText = function(text){
    this.text = text;
}

Text.prototype.setFont = function(font){
    this.font = font;
}

Text.prototype.draw = function(g){
    g.strokeStyle = this.lineColor;
    g.fillStyle = this.fillColor;
    g.lineWidth = this.lineWidth;
    g.font = this.font;
}