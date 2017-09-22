function Text(){
    this.text;
    this.font;
    this.position;
    
}

Text.prototype = new GraphVisual();

Text.prototype.setText = function(text){
    this.text = text;
}

Text.prototype.setFont = function(font){
    this.font = font;
}

Text.prototype.draw = function(g){
    g.font = this.font;
    
}