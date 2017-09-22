function SmithEnergyGraphArea(canvas){
    this.energyType;
    
    if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
        this.initializeGraphics();
    }
}

SmithEnergyGraphArea.prototype = new GraphArea();

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
    console.log("hi");
    this.title += this.dataSeries[0].getEnergyType() + " Consumption";
    var text = new HorizontalText();
    text.setText(this.title);
    text.setFont("30 px Arial");
    text.setPosition(new Point(this.canvas.width/3, this.canvas.height/20));
    this.visuals.push(text);
    console.log(this.title);
}

