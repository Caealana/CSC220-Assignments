//Graph.js

function GraphArea(canvas){
	this.title = "";
	this.xAxisLabel;
	this.yAxisLabel;
	this.dataSeries = []; //data series this graph represents, each data series has element and label
	this.visuals = []; //visual elements in graph area to draw
        this.graphs = [];
        this.hitTestables = [];
	if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
        this.graphHeight = this.canvas.height - this.canvas.height/7.9;
        console.log(this.canvas.height);
        //this.initializeGraphics();
        }
        //this.yScaleFactor;
        this.scaleFactor;
        this.graphHeight;
}

GraphArea.prototype.getGraphHeight = function(){
    return this.graphHeight;
}

GraphArea.prototype.getHitTestables = function(){
    return this.hitTestables;
}

GraphArea.prototype.addHitTestables = function(hitTestable){
    this.hitTestables.push(hitTestable);
}

GraphArea.prototype.addVisual = function(visual){
    this.visuals.push(visual);
}

GraphArea.prototype.setGraphHeight = function(height){
    this.graphHeight = height;
}

GraphArea.prototype.getDataSeries = function(){
    return this.dataSeries;
}

GraphArea.prototype.addDataSeries = function(series){
	this.dataSeries.push(series);
}

GraphArea.prototype.clearDataSeries = function(){
	this.dataSeries = [];
}

GraphArea.prototype.removeDataSeries = function(energy, building){
	for(var i = 0; i < this.dataSeries.length; i++){
		if(this.dataSeries[i].getBuilding() === building &&
                        this.dataSeries[i].getEnergyType() === energy){
			this.dataSeries.splice(i, 1);
		}
	}
}

GraphArea.prototype.getXAxisLabel = function(){
	return this.xAxisLabel;
}

GraphArea.prototype.getYAxisLabel = function(){
	return this.yAxisLabel;
}

GraphArea.prototype.getTitle = function(){
	return this.title;
}

GraphArea.prototype.createXAxis = function(width){
    var xAxis = new Line();
    xAxis.setLineWidth(width);
    var p1 = new Point(this.canvas.width/18,
    this.graphHeight);
    var p2 = new Point(this.canvas.width,
    this.graphHeight);
    xAxis.setPosition(p1);
    xAxis.setP2(p2);
    xAxis.setLineColor("black");
    xAxis.setFillColor("black");
    this.visuals.push(xAxis);
    //create tick marks on xAxis
    //1st tick: p1.getX + this.spacing
    //y point: same as xAxis
    /*for(var i = 0; i < this.dataSeries.length; i++){
    }*/
}

GraphArea.prototype.createYAxis = function(width){
    var yAxis = new Line();
    yAxis.setLineColor("black");
    yAxis.setLineWidth(width);
    var p1 = new Point(this.canvas.width/18, this.canvas.height/20);
    var p2 = new Point(this.canvas.width/18,
    this.graphHeight);
    yAxis.setPosition(p1);
    yAxis.setP2(p2);
    this.visuals.push(yAxis);
}

GraphArea.prototype.createYLabel = function(){
    var yTitle = new VerticalText();
    if(this.dataSeries.length > 0){
        this.yAxisLabel = this.dataSeries[0].getYFieldName();
        yTitle.setFillColor("black");
        yTitle.setText(this.yAxisLabel);
        yTitle.setFont("20px Arial");
        yTitle.setPosition(new Point(-this.canvas.height/2, this.canvas.width/25))
        this.visuals.push(yTitle);
    }
}

GraphArea.prototype.clearTitle = function(){
    this.title = '';
}

GraphArea.prototype.clearVisuals = function(){
    this.visuals = [];
}

GraphArea.prototype.createXLabel = function(){
    var xTitle = new HorizontalText();
    if(this.dataSeries.length > 0){
        this.xAxisLabel = this.dataSeries[0].getXFieldName();
        //console.log(this.xAxisLabel);
        xTitle.setFillColor("black");
        xTitle.setText(this.xAxisLabel);
        xTitle.setFont("20px Arial");
        xTitle.setPosition(new Point(this.canvas.width/2.3,
        this.graphHeight + (1/25)*this.canvas.height));
        this.visuals.push(xTitle);
        //xTitle.text;
    }
}

GraphArea.prototype.createTitle = function(){
    //override
}

/*GraphArea.prototype.initializeGraphics = function(){
    this.canvas.width = (window.innerWidth)*(9/10);
    this.canvas.height = (window.innerHeight)*(27/30);
    this.graphHeight = this.canvas.height - this.canvas.height/7.3;
    //var _this = this;
    /*window.addEventListener('resize',
        function() {
            _this.onWindowResize();
            }, false);*/
//}*/

GraphArea.prototype.onWindowResize = function(){
    this.canvas.width = (window.innerWidth)*(7/10);
    this.canvas.height = (window.innerHeight)*(23/30);
}

GraphArea.prototype.draw = function(){
    var _this = this;
    _this.clearScreen();
    for(var i = 0; i < this.visuals.length; i++){
        console.log(this.visuals[i]);
        this.visuals[i].draw(this.g);
        this.visuals[i].drawPath(this.g);
    }
    console.log(this.visuals.length);
    for(var j = 0; j < this.graphs.length; j++){
        this.graphs[j].draw(this.g);
    }
}

GraphArea.prototype.updateInfo = function(dataSeries){
    //loop to add data series + remove
    var _this = this;
    _this.initializeGraphStructure();
    _this.draw();
}

GraphArea.prototype.clear = function(){
    for(var i = 0; i < this.graphs.length; i++){
        this.graphs[i].clearGraphElements();
    }
    this.title = "";
    this.xAxisLabel = '';
    this.yAxisLabel = '';
    this.dataSeries = []; //data series this graph represents, each data series has element and label
    this.visuals = []; //visual elements in graph area to draw
    this.graphs = [];
        //this.yScaleFactor;
    //this.scaleFactor = undefined;
    //this.graphHeight = undefined;
    this.g.save();
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.restore();
}

GraphArea.prototype.clearScreen = function(){
    this.g.save();
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.restore();
}

GraphArea.prototype.createLineGraphs = function(){
    var _this = this;
    var lineGraph;
        for(var c = 0; c < this.dataSeries.length; c++){
            lineGraph = new LineGraph(_this, this.canvas);
            lineGraph.setColor(TOOLS.getRandomColor());
            lineGraph.setDataSeries(_this.dataSeries[c]);
            lineGraph.calculateYScaleFactor();
            lineGraph.clearGraphElements();
            lineGraph.calculateSpaceBetweenPoints();
            lineGraph.clearGraphElements();
            lineGraph.createEllipses();
            lineGraph.createConnectingLines();
            this.visuals.push(lineGraph);
            this.graphs.push(lineGraph);
            //lineGraph.draw();
            //console.log(this.graphs.length);
            //console.log(this.graphs[c].getColor());
        }
    }
    
GraphArea.prototype.initializeGraphStructure = function(){
    var currentGraphArea = this;
    currentGraphArea.createXAxis(2);
    currentGraphArea.createYAxis(2);
    currentGraphArea.createXLabel();
    currentGraphArea.createYLabel();
    currentGraphArea.createTitle();
    currentGraphArea.calculateYScaleFactor();
}

GraphArea.prototype.calculateYScaleFactor = function(){
	//get largest Y value
	//if largest Y value is small 
	//- indow.innerHeight/biggestVal - window.innerHeight/300;
	//if largest Y value is big -
	// this.multFactor = biggestVal/window.innerHeight - 
                //window.innerHeight/2000;          
    var biggestVal = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < this.dataSeries.length; i++){
        console.log(this.dataSeries[i].getDataPoints().length);
        for(var j = 0; j < this.dataSeries[i].getDataPoints().length; j++){
            console.log(this.dataSeries[i].getDataPoints()[j]);
            if(this.dataSeries[i].getDataPoints()[j].getValue() > biggestVal){
                //console.log("hi");
                //console.log("biggestValb4");
                //console.log(biggestVal);
                biggestVal = this.dataSeries[i].getDataPoints()[j].getValue();
                //console.log("biggestVal");
                //console.log(biggestVal);
            }
    //console.log("scale factor");
    //console.log(this.scaleFactor);
        }
    }
        this.scaleFactor = (((this.canvas.height) * .8)/biggestVal);
        console.log(this.scaleFactor);
}

GraphArea.prototype.getScaleFactor = function(){
    return this.scaleFactor;
}

GraphArea.prototype.isHit = function(pointer, pointerPos){
        for(var i = this.hitTestables.length-1; i >= 0; i--){
            if(this.hitTestables[i].isHit(pointerPos)){ //goes through array of elements
                var activeVisual = this.hitTestables[i]; //if ele is hit
                //activeVisual.setActive();
                //activeVisual.setDistFromPoint(position);
                //this.activeEle.push(activeVisual);  
                pointer.setActiveVisual(activeVisual); //give the corresponding pointer the visual that links to it
                return true;
            }
        
        else if( i === this.eleArray.length - 1){
            return false;
        }
    }
}