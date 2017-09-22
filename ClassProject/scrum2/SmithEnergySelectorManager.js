SmithEnergySelectorManager.prototype = new SelectorManager();
SmithEnergySelectorManager.constructor = SmithEnergySelectorManager;
function SmithEnergySelectorManager(dataSeries){
    SelectorManager.call(this, dataSeries);
    this.energyType = [];
}
//start off with energy selectors - after energy is chosen..create selector with available houses

SmithEnergySelectorManager.prototype.intializeSelectors = function(){
    //arrValues.indexOf('Sam') > -1
    for(var i = 0; i < this.dataSeries.length; i++){
        var currentData = this.dataSeries[i];
        var energy = currentData.getEnergyType();
        if(!(this.energyType.indexOf(energy) > -1)){
            this.energyType.push(energy);
            //console.log("energy");
        }     
    }
    var energySelector = new SmithEnergySelector();
    this.selectors.push(energySelector);
    energySelector.createSelector("energySelector");
    energySelector.addEnergyOptions(this.energyType);
}

/*var buildings = [];
function addBuildingSelector(energyType){
    
}*/

/*var dataMan = new SmithEnergyDataManager();
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

var graph = new SmithEnergyGraphArea(document.getElementById("canvas"));
graph.initializeGraphics();
graph.addDataSeries(dataMan.getDataSeries()[5]);
graph.createXAxis(2);
graph.createYAxis(2);
graph.createXLabel();
graph.createYLabel();
graph.createTitle();
graph.draw();


var lineGraph = new LineGraph(graph, document.getElementById("canvas"));
lineGraph.setDataSeries(dataMan.getDataSeries()[5]);
lineGraph.calculateYScaleFactor();

lineGraph.calculateSpaceBetweenPoints();
lineGraph.createEllipses();
lineGraph.draw();

var energySelector = new SmithEnergySelectorManager(dataMan.getDataSeries());
energySelector.initializeSelectors();
*/