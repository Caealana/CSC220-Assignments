function DataPoint(label, value){
	this.label = label;
	this.value = value;
}

DataPoint.prototype.getValue = function(){
	return this.value;
}

DataPoint.prototype.getLabel = function(){
	return this.label;
}

DataPoint.prototype.setLabel = function(label){
	this.label = label;
}

DataPoint.prototype.setValue = function(value){
	this.value = value;
}
