SmithEnergyGraphArea.prototype = new GraphArea();
SmithEnergyGraphArea.constructor = SmithEnergyGraphArea;
function SmithEnergyGraphArea(canvas){
    GraphArea.call(this, canvas);
    this.energyType;
    this.buildings = [];
}

SmithEnergyGraphArea.prototype.addDataSeries = function(series){
	this.dataSeries.push(series);
        this.buildings.push(series.getBuilding());
}

SmithEnergyGraphArea.prototype.createTitle = function(){
    var buildings = [];
    for(var i = 0; i < this.dataSeries.length; i++){
        if(!(buildings.indexOf(this.dataSeries[i].getBuilding()) > -1)){
            buildings.push(this.dataSeries[i].getBuilding());
        }
    }
    console.log(buildings);
    for(var i = 0; i < buildings.length; i++){
        this.title += buildings[i] + " ";
    }
    //console.log("hi");
    this.energyType = this.dataSeries[0].getEnergyType();
    this.title += this.energyType + " Consumption";
    var text = new HorizontalText();
    text.setText(this.title);
    text.setFont("25px Arial");
    text.setPosition(new Point(this.canvas.width/17, this.canvas.height/20));
    this.visuals.push(text);
    console.log(this.title);
}

SmithEnergyGraphArea.prototype.createKeys = function(){
    var currentX = this.canvas.width/25;
    var key;
    for(var i = 0; i < this.graphs.length; i++){
        key = new Key();
        var building = this.graphs[i].getDataSeries().getBuilding();
        key.setFillColor(this.graphs[i].getColor());
        //console.log(this.graphs[i].getColor());
        key.setLabel(building);
        key.setPosition(new Point(currentX, this.graphHeight +
                this.canvas.height/20));
        key.createLabel();
        key.createBox();
        this.visuals.push(key);
        currentX = currentX + this.canvas.width/6;
    }
}