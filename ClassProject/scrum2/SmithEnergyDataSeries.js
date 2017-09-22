//SmithEnergyDataSeries
SmithEnergyDataSeries.prototype = new DataSeries();
SmithEnergyDataSeries.constructor = SmithEnergyDataSeries;
function SmithEnergyDataSeries(){
        DataSeries.call(this);
	this.meterName;
	this.building;
	this.energyType;
        this.units;
}

SmithEnergyDataSeries.prototype.setMeterName = function(name){
	this.meterName = name;
}

SmithEnergyDataSeries.prototype.getMeterName = function(){
	return this.meterName;
}

SmithEnergyDataSeries.prototype.setUnits = function(units){
	this.units = units;
}

SmithEnergyDataSeries.prototype.getUnits = function(){
	return this.units;
}

SmithEnergyDataSeries.prototype.setBuilding = function(name){
	this.building = name;
}

SmithEnergyDataSeries.prototype.getBuilding = function(){
	return this.building;
}

SmithEnergyDataSeries.prototype.setEnergyType = function(type){
	this.energyType = type;
}

SmithEnergyDataSeries.prototype.getEnergyType = function(){
	return this.energyType;
}