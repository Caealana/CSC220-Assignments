//Graph.js

function GraphArea(canvas){

	this.title = "";
	this.xAxisLabel;
	this.yAxisLabel;
	this.dataSeries = []; //data series this graph represents, each data series has element and label
	this.visuals = []; //visual elements in graph area to draw
        

	if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
        this.initializeGraphics();
    }
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

GraphArea.prototype.removeDataSeriesByBuilding = function(building){
	for(var i = 0; i < this.dataSeries.length; i++){
		if(this.dataSeries[i].getBuilding() === building){
			this.dataSeries.splice(i, 1);
		}
	}
}

GraphArea.prototype.removeDataSeriesByEnergyType = function(energy){

}

GraphArea.prototype.removeDataSeriesByTitle = function(title){

}

GraphArea.prototype.getXAxisLabel = function(){
	return this.xAxisLabel;
}

GraphArea.prototype.setYAxisLabel = function(){
	return this.yAxisLabel;
}

GraphArea.prototype.setTitle = function(){
	return this.title;
}

GraphArea.prototype.createXAxis = function(width){
    var xAxis = new Line();
    xAxis.setLineWidth(width);
    var p1 = new Point(this.canvas.width/18, this.canvas.height - this.canvas.height/15);
    var p2 = new Point(this.canvas.width,
    this.canvas.height - this.canvas.height/15);
    xAxis.setPosition(p1);
    xAxis.setP2(p2);
    this.visuals.push(xAxis);
    //create tick marks on xAxis
    //1st tick: p1.getX + this.spacing
    //y point: same as xAxis
    /*for(var i = 0; i < this.dataSeries.length; i++){
        
    }*/
}

GraphArea.prototype.createYAxis = function(width){
    var yAxis = new Line();
    yAxis.setLineWidth(width);
    var p1 = new Point(this.canvas.width/18, this.canvas.height/20);
    var p2 = new Point(this.canvas.width/18,
    this.canvas.height - this.canvas.height/15);
    yAxis.setPosition(p1);
    yAxis.setP2(p2);
    this.visuals.push(yAxis);
}

GraphArea.prototype.createYLabel = function(){
    var yTitle = new VerticalText();
    if(this.dataSeries.length > 0){
        this.yAxisLabel = this.dataSeries[0].getYFieldName();
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
        xTitle.setText(this.xAxisLabel);
        xTitle.setFont("20px Arial");
        xTitle.setPosition(new Point(this.canvas.width/2.3,
        (49/50)*this.canvas.height));
        this.visuals.push(xTitle);
        //xTitle.text;
    }
}

GraphArea.prototype.createTitle = function(){
    //override
}

GraphArea.prototype.initializeGraphics = function(){
	this.canvas.width = (window.innerWidth)*(9/10);
	this.canvas.height = (window.innerHeight)*(29/30);
}

GraphArea.prototype.draw = function(){
    for(var i = 0; i < this.visuals.length; i++){
        this.visuals[i].draw(this.g);
        this.visuals[i].drawPath(this.g);
    }
}

GraphArea.prototype.clear = function(){
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.fillStyle = "black";
}
