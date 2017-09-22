function DataSeries(){
	this.title; //house+typeofenergy+consumption
	this.xFieldName;
	this.yFieldName;
	this.dataPoints = [];//array of points

}

DataSeries.prototype.setTitle = function(title){
	this.title = title;
}

DataSeries.prototype.getTitle = function(){
	return this.title;
}

DataSeries.prototype.addDataPoint = function(dataPoint){
	this.dataPoints.push(dataPoint);
}

DataSeries.prototype.getDataPoints = function(){
	return this.dataPoints;
}

DataSeries.prototype.setXFieldName = function(name){
	this.xFieldName = name;
}

DataSeries.prototype.getXFieldName = function(){
	return this.xFieldName;
}

DataSeries.prototype.setYFieldName = function(name){
	this.yFieldName = name;
}

DataSeries.prototype.getYFieldName = function(){
	return this.yFieldName;
}

DataSeries.prototype.setMeterName = function(name){
	this.meterName = name;
}

DataSeries.prototype.getMeterName = function(){
	return this.meterName;
}

DataSeries.prototype.getTitle = function(){
    return this.title;
}

DataSeries.prototype.clearDataPoints = function(){
    this.dataPoints = [];
}