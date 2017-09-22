function Selector(){
    
}

Selector.prototype.createSelector = function(){

}

Selector.prototype.createSelector = function(id){
    //adding selector to html. author:tymeJV from http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
    var myDiv = document.getElementById("selectorDiv");
    var selectList = document.createElement("select");
    selectList.id = id;
    myDiv.appendChild(selectList);
}