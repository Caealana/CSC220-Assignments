SmithEnergyController.prototype = new Controller();
SmithEnergyController.constructor = SmithEnergyController;
function SmithEnergyController(graphArea){
    Controller.call(this, graphArea);
}

SmithEnergyController.prototype.testFunc = function(){
    var _this = this;
    this.dataManager = new SmithEnergyDataManager();
    this.dataManager.setData(dataJson);
    this.dataManager.initialize();
    this.dataSeries = this.dataManager.getDataSeries();
    /*this.graphArea = new SmithEnergyGraphArea(document.getElementById("canvas"));
    this.graphArea.initializeGraphics();
    this.graphArea.addDataSeries(this.dataManager.getDataSeriesByIndex(5));
    this.graphArea.addDataSeries(this.dataManager.getDataSeriesByIndex(2));
    this.graphArea.initializeGraphStructure();
    //graphArea has function to create lineGraphs in it
    this.graphArea.createLineGraphs();
    this.graphArea.createKeys();
    this.graphArea.draw();*/
    /*this.graphArea.clear();
    console.log(this.graphArea.getDataSeries());
    this.graphArea.addDataSeries(this.dataManager.getDataSeriesByIndex(3));
    console.log(this.graphArea.getDataSeries());
    this.graphArea.initializeGraphStructure();
    this.graphArea.createLineGraphs();
    this.graphArea.draw();*/
}

SmithEnergyController.prototype.initialGraphSetUp = function(){
    var _this = this;
    this.dataManager = new SmithEnergyDataManager();
    this.dataManager.setData(dataJson);
    this.dataManager.initialize();
    this.dataSeries = this.dataManager.getDataSeries();
    //this.activeDataSeries = [];
    //var dataSet = this.dataManager.getDataSeries()[5];
    //var dataPoints = dataSet.getDataPoints();
    /*console.log(dataPoints[0].getValue());
    console.log(dataPoints[0].getLabel());
    console.log(dataPoints[1].getValue());
    console.log(dataPoints[1].getLabel());
    console.log(dataPoints[2].getValue());
    console.log(dataPoints[2].getLabel());
    console.log(dataPoints[3].getValue());
    console.log(dataPoints[3].getLabel());
    console.log(dataPoints[4].getValue());
    console.log(dataPoints[4].getLabel());*/
    //this.graphArea = new SmithEnergyGraphArea(document.getElementById("canvas"));
    //this.graphArea.initializeGraphics();
    
    var canvas = document.getElementById("canvas");
    var g = canvas.getContext('2d');
    /*var key = new Key();
    key.setPosition(new Point(50, 40));
    key.setFillColor("black");
    key.setLabel("hi");
    key.createBox();
    key.createLabel();
    key.draw(g);
    key.drawPath(g);*/
    
    //this.graphArea.addDataSeries(this.dataManager.getDataSeriesByIndex(5));
    //this.graphArea.addDataSeries(this.dataManager.getDataSeriesByIndex(2));
    //this.activeDataSeries.push(this.dataManager.getDataSeriesByIndex(5));
    //this.activeDataSeries.push(this.dataManager.getDataSeriesByIndex(2));
    //this.graphArea.initializeGraphStructure();
    //graphArea has function to create lineGraphs in it
    //this.graphArea.createLineGraphs();
    //this.graphArea.draw();
    /*function createLineGraphs(){
        for(var c = 0; c < graphArea.getDataSeries().length; c++){
            lineGraph = new LineGraph(graphArea,
            document.getElementById("canvas"));
            lineGraph.setColor(TOOLS.getRandomColor());
            lineGraph.setDataSeries(graphArea.getDataSeries()[c]);
            lineGraph.calculateYScaleFactor();
            lineGraph.calculateSpaceBetweenPoints();
            lineGraph.createEllipses();
            lineGraph.createConnectingLines();
            lineGraph.draw();
        }
    }*/
    var selectorManager = new SmithEnergySelectorManager
    (this.dataManager.getDataSeries());
    selectorManager.intializeSelectors();
    
    //var dataManager = this.dataManager;
    var dataSeries = this.dataSeries;
    document.getElementById("energySelector").onchange = function(){
        //energySelector doesnt know the this.ajngkds variables since it is not a prototype of controller
        _this.graphArea.clear();
        //_this.graphArea.clearDataSeries();
        var myDiv = document.getElementById("buildingsDiv");
        myDiv.innerHTML = "";
        var energyType = this.value;
        //var energy = document.getElementById("energySelector").value;
        var buildings = [];
        for(var i = 0; i < dataSeries.length; i++){
            if(dataSeries[i].getEnergyType() === energyType){
                buildings.push(dataSeries[i].getBuilding());
            }
        }
        var buildingCheck = new SmithEnergyCheckboxes(buildings);
        buildingCheck.createCheckboxes();
        //this.value is energy type - store it for safekeeping
        var checkBoxes = myDiv.getElementsByTagName('input');

        var checkedBuildings = [];
        for(var j = 0; j < checkBoxes.length; j++){
            //console.log(checkBoxes[j]);
            if(checkBoxes[j].type === 'checkbox'){
                checkBoxes[j].onclick = function(){
                    _this.graphArea.clear();
                    var _thisCheckBox = this;
                    if(_thisCheckBox.checked === true){
                        checkedBuildings.push(_thisCheckBox.value)
                    }
                    else{
                        if(checkedBuildings.indexOf(_thisCheckBox.value) > -1){
                            checkedBuildings.splice(checkedBuildings.
                                    indexOf(_thisCheckBox.value), 1)
                        }
                    }
                    //create new list of dataSeries
                    //then call a function to update the graph area and line graphs
                    //_this.graphArea.clearDataSeries();
                    _this.updateDataSeries(energyType, checkedBuildings);
                    if(_this.graphArea.getDataSeries().length > 0){
                        _this.displayGraphs();                        
                    }
                }
            }
        }
    }
}

SmithEnergyController.prototype.displayGraphs = function(){
    this.graphArea.initializeGraphStructure();
    //graphArea has function to create lineGraphs in it
    this.graphArea.createLineGraphs();
    this.graphArea.createKeys();
    this.graphArea.draw();
}
 SmithEnergyController.prototype.updateDataSeries =
         function(chosenEnergy, checkedBuildings){
            for(var i = 0; i < this.dataSeries.length; i++){
                var dataSetEnergy = this.dataSeries[i].getEnergyType();
                var dataSetBuilding = this.dataSeries[i].getBuilding();
                //what if building 
                if(chosenEnergy === dataSetEnergy &&
                        (checkedBuildings.indexOf(dataSetBuilding) > -1)){
                        //console.log(this.dataSeries[i].getBuilding());
                        this.graphArea.addDataSeries(this.dataSeries[i]);
                }
            }
        }
    /*var buildingsDiv = document.getElementById('buildingsDiv');
    //node list of checkboxes
    var checkBoxes = buildingsDiv.getElementsByTagName('input');
    for(var x = 0; x < checkBoxes.length; x++){
        if(checkBoxes[x].type === 'checkbox'){
            checkBoxes[x].onclick = function(){
                if(this.checked){
                    //create list of buildings - add buildings if they are checked
                }
                else{
                    //if it's not checked - check if it's in list of buildings
                    //if it is - remove
                }
            }
        }
    }*/
    
    /*function setEnergy(value){
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
        }
    }
    */
   
   
/*function initialize() {
    var controller = new SmithEnergyController();
    controller.initialGraphSetUp();
    //controller.initialGraphSetUp();
}

window.onload = initialize;*/

//the last checked box graph remains in display