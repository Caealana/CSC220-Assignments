function Selector(){
    this.id;
    this.selectList;
    this.options = [];
    this.position;
    
}

Selector.prototype.createSelector = function(id){
    //adding selector to html. author:tymeJV from http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
    var myDiv = document.getElementById("selectorDiv");
    this.selectList = document.createElement("select");
    this.selectList.id = id;
    myDiv.appendChild(this.selectList);
}

Selector.prototype.getSelectList = function(){
    return this.selectList;
}

