SmithEnergySelector.prototype = new Selector();
SmithEnergySelector.constructor = SmithEnergySelector;
function SmithEnergySelector(){
    Selector.call(this);
}

SmithEnergySelector.prototype.createSelector = function(id){
    //adding selector to html. author:tymeJV from http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
    var myDiv = document.getElementById("selectorDiv");
    this.selectList = document.createElement("select");
    this.selectList.id = id;
    this.selectList.onChange = "addBuildingBoxes(this.value)";
    myDiv.appendChild(this.selectList);
}

SmithEnergySelector.prototype.addEnergyOptions = function(options){
    var option;
    for(var i = 0; i < options.length; i++){
        option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        this.selectList.appendChild(option);
    }
}