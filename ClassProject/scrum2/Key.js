Key.prototype = new GraphVisual();
Key.constructor = Key;
function Key(){
    GraphVisual.call(this);
    this.label;
    //this.color;
    //this.graph;
    this.elements = [];
}

Key.prototype.setLabel = function(label){
    this.label = label;
}

Key.prototype.getLabel = function(){
    return this.label;
}

Key.prototype.createBox = function(){
    var rect = new Rectangle();
    rect.setFillColor(this.fillColor);
    rect.setLineColor("black");
    rect.setLineWidth(1);
    rect.setPosition(this.position);
    //rect.setPosition(new Point(40, 50));
    rect.setWidth(30);
    rect.setHeight(30);
    this.elements.push(rect);
}

Key.prototype.createLabel = function(){
    var text = new HorizontalText();
    text.setText(this.label);
    text.setFillColor("black");
    text.setFont("15px Arial");
    text.setPosition(new Point(this.position.getX() + 45,
        this.position.getY() + 20));
    //text.setPosition(new Point(100, 50));
    this.elements.push(text);
}

Key.prototype.draw = function(g){
    
}

Key.prototype.drawPath = function(g){
    for(var i = 0; i < this.elements.length; i++){
        console.log(this.elements[i]);
        this.elements[i].draw(g);
        this.elements[i].drawPath(g);
    }
}