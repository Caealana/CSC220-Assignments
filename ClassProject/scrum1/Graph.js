/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Graph(graphArea,canvas){
    this.dataSeries;
    this.dataPoints;
    this.xSpacing;
    this.scaleFactor;
    this.graphArea = graphArea;
    this.graphElements = [];
    if (typeof canvas !== "undefined") {
         console.log("not undefined");
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
    }
}

Graph.prototype.setDataSeries = function(data){
    this.dataSeries = data;
    this.dataPoints = this.dataSeries.getDataPoints();
}

Graph.prototype.getDataPoints = function(){
    return this.dataPoints;
}

Graph.prototype.calculateYScaleFactor = function(){
	//get largest Y value
	//if largest Y value is small 
	//- indow.innerHeight/biggestVal - window.innerHeight/300;
	//if largest Y value is big -
	// this.multFactor = biggestVal/window.innerHeight - 
                //window.innerHeight/2000;          
    var biggestVal = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < this.dataPoints.length; i++){
        //console.log("dataPoint value");
        //console.log(this.dataPoints[i].getValue());
        if(this.dataPoints[i].getValue() > biggestVal){
            console.log("biggestValb4");
            console.log(biggestVal);
            biggestVal = this.dataPoints[i].getValue();
            console.log("biggestVal");
            console.log(biggestVal);
        }
    }
    console.log(this.canvas.height);
    this.scaleFactor = ((this.canvas.height * .7)/biggestVal);
    console.log("scale factor");
    console.log(this.scaleFactor);
}

Graph.prototype.calculateSpaceBetweenPoints = function(){
    this.xSpacing = ((9/10)*this.canvas.width)/(this.dataPoints.length-1);
    console.log("xSpacing");
    console.log(this.xSpacing);
}

Graph.prototype.draw = function(){
    console.log(this.graphElements[0].getPosition());
    for(var i = 0; i < this.graphElements.length; i++){
        this.graphElements[i].draw(this.g);
        this.graphElements[i].drawPath(this.g);
    }
}

