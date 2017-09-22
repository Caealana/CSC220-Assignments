//DataSeries.js

function DataManager(){ //takes Json and creates data series
	this.data;
	this.dataSeries = [];
}

DataManager.prototype.setData = function(data){
    this.data = data;
}

DataManager.prototype.initialize = function(){
    //override
}

DataManager.prototype.getDataSeries = function(){
    return this.dataSeries;
}

DataManager.prototype.addDataSeries = function(data){
    this.dataSeries.push(data);
}

DataManager.prototype.getDataSeriesByIndex = function(index){
    return this.dataSeries[index];
}

DataManager.prototype.clearDataSeries = function(){
    this.dataSeries = [];
}