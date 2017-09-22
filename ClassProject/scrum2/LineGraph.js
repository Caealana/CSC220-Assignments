LineGraph.prototype = new Graph();
LineGraph.constructor = LineGraph;
function LineGraph(graphArea, canvas){
    Graph.call(this, graphArea, canvas);
    this.graphPoints = [];
    //this.ellipses = [];
    //this.connectingLines = [];
}

LineGraph.prototype.createEllipses = function(){
    this.graphHeight = this.graphArea.getGraphHeight();
    var currentXValue = this.canvas.width/18;
    var dataPoints = this.dataSeries.getDataPoints();
    //console.log(this.dataPoints.length);
    for(var i = 0; i < this.dataPoints.length; i++){
        var yValue = this.graphArea.getGraphHeight() - this.canvas.height/100 -
                (dataPoints[i].getValue()*this.graphArea.getScaleFactor());
        console.log(this.graphArea.getScaleFactor());
        //console.log(currentXValue);
        var position = new Point(currentXValue,
        yValue);
        this.graphPoints.push(position);
        var ellipse = new Ellipse();
        ellipse.setWidth(7);
        ellipse.setHeight(7);
        ellipse.setFillColor(this.color);
        ellipse.setLineColor(this.color);
        ellipse.setLineWidth(2);
        ellipse.setPosition(position);
        //this.ellipses.push(ellipse);
        this.graphElements.push(ellipse);
        this.graphArea.addHitTestables(ellipse);
        //console.log(this.graphElements.length);
        currentXValue += this.xSpacing;
    }
}

LineGraph.prototype.createConnectingLines = function(){
    for(var i = 0; i < this.graphPoints.length - 1; i++){
        var line = new Line();
        line.setPosition(new Point(this.graphPoints[i].getX(),
        this.graphPoints[i].getY() + 3));
        line.setP2(new Point(this.graphPoints[i+1].getX(),
        this.graphPoints[i+1].getY() + 2));
        line.setLineColor(this.color);
        line.setLineWidth(1.5);
        this.graphElements.push(line);
        //this.connectingLines.push(line);
        //console.log(this.graphElements.length);
    }
}

LineGraph.prototype.clear = function(){
    this.fillcolor = undefined;
    this.dataSeries = undefined;
    this.dataPoints = [];
    this.xSpacing = undefined;
    this.scaleFactor = undefined;
    this.graphArea = undefined;
    this.graphElements = [];
    this.canvas = undefined;
    this.g = undefined;
    this.graphPoints = [];
}
//will collapse the following into initialize/etc functions later
LineGraph.prototype.clearGraphPoints = function(){
    this.graphPoints = [];
}
