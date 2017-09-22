function LineGraph(graphArea, canvas){
    //this.visuals
    if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
    }
}

LineGraph.prototype = new Graph();

LineGraph.prototype.createEllipses = function(){
    var currentXValue = this.canvas.width/18;
    var dataPoints = this.dataSeries.getDataPoints();
    for(var i = 0; i < this.dataPoints.length; i++){
        var yValue = dataPoints[i].getValue()*this.scaleFactor;
        console.log(yValue);
        console.log(currentXValue);
        var position = new Point(currentXValue,
        yValue);
        var ellipse = new Ellipse();
        ellipse.setWidth(5);
        ellipse.setHeight(5);
        ellipse.setFillColor("black");
        ellipse.setLineColor("black");
        ellipse.setLineWidth(2);
        ellipse.setPosition(position);
        this.graphElements.push(ellipse);
        currentXValue += this.xSpacing;
    }
}

LineGraph.prototype.createConnectingLines = function(){
    
}

//will collapse the following into initialize/etc functions later
var dataMan = new SmithEnergyDataManager();
dataMan.setData(dataJson);
dataMan.initialize();

var dataSet = dataMan.getDataSeries()[5];
var dataPoints = dataSet.getDataPoints();
console.log(dataPoints[0].getValue());
console.log(dataPoints[0].getLabel());
console.log(dataPoints[1].getValue());
console.log(dataPoints[1].getLabel());
console.log(dataPoints[2].getValue());
console.log(dataPoints[2].getLabel());
console.log(dataPoints[3].getValue());
console.log(dataPoints[3].getLabel());
console.log(dataPoints[4].getValue());
console.log(dataPoints[4].getLabel());

var graphArea = new SmithEnergyGraphArea(document.getElementById("canvas"));
graphArea.initializeGraphics();
graphArea.addDataSeries(dataMan.getDataSeries()[5]);
graphArea.addDataSeries(dataMan.getDataSeries()[2]);
graphArea.createXAxis(2);
graphArea.createYAxis(2);
graphArea.createXLabel();
graphArea.createYLabel();
graphArea.createTitle();
graphArea.draw();


var lineGraph = new LineGraph(graphArea, document.getElementById("canvas"));
lineGraph.setDataSeries(dataMan.getDataSeries()[5]);
lineGraph.calculateYScaleFactor();

lineGraph.calculateSpaceBetweenPoints();
lineGraph.createEllipses();
lineGraph.draw();

var lineGraph2 = new LineGraph(graphArea, document.getElementById("canvas"));
lineGraph2.setDataSeries(dataMan.getDataSeries()[2]);
lineGraph2.calculateYScaleFactor();

lineGraph2.calculateSpaceBetweenPoints();
lineGraph2.createEllipses();
lineGraph2.draw();

function setEnergy(value){
    var currentData = graphArea.getDataSeries();
    var currentBuildings = [];
    for(var i = 0; i < currentData.length; i++){
        currentBuildings.push(currentData[i].getBuilding());
    }
    graphArea.clearDataSeries();
    if(value === "E"){
        for(var j = 0; j < dataMan.getDataSeries().length; j ++){
            if(dataMan.getDataSeries()[j].getEnergyType() === "Electricity" &&
               currentBuildings.indexOf(
               dataMan.getDataSeries()[j].getBuilding()) > -1){
                
               graphArea.addDataSeries(dataMan.getDataSeries()[j]);
                    }
        }
    }
    else if(value === "W"){
            for(var j = 0; j < dataMan.getDataSeries().length; j ++){
            if(dataMan.getDataSeries()[j].getEnergyType() === "Water" &&
               currentBuildings.indexOf(
               dataMan.getDataSeries()[j].getBuilding()) > -1){
   
               graphArea.addDataSeries(dataMan.getDataSeries()[j]);
                    }
        }
    }
    console.log(graphArea.getDataSeries());
    
    graphArea.clearTitle();
    graphArea.clearVisuals();
    graphArea.clear();
    
    graphArea.createXAxis(2);
    graphArea.createYAxis(2);
    graphArea.createXLabel();
    graphArea.createYLabel();
    graphArea.createTitle();
    graphArea.draw();
    
    /*for(var m = 0; m < graphArea.getDataSeries().length; m++){
        var canvas = document.getElementById("canvas");
        var lineGraph3 = new Graph();
        LineGraph(graphArea, canvas);
        lineGraph3.setDataSeries(graphArea.getDataSeries()[m]);
        lineGraph3.calculateYScaleFactor();

        lineGraph3.calculateSpaceBetweenPoints();
        lineGraph3.createEllipses();
        lineGraph3.draw();
    }*/
}