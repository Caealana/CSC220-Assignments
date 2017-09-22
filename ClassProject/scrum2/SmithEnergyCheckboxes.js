SmithEnergyCheckboxes.prototype = new Checkboxes();
SmithEnergyCheckboxes.constructor = SmithEnergyCheckboxes;
function SmithEnergyCheckboxes(labels){
    Checkboxes.call(this, labels);
    this.energy;
}

SmithEnergyCheckboxes.prototype.createCheckboxes = function(){
    //creating checkboxes dynamically source: http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_create
   //source2:
    var input;
    var label;
    var myDiv = document.getElementById("buildingsDiv");
    for(var i = 0; i < this.labels.length; i++){
        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.value = this.labels[i];
        input.id = this.labels[i];
        input.class = "checkBox";
        /*input.onclick = function(){
            this.checkedBuildings = [];
            if(this.checked){
                    this.checkedBuildings.push(this.value);
                    //create list of buildings - add buildings if they are checked
                }
                else{
                    if(this.checkedBuildings.indexOf(this.value) > -1){
                        
                    }
                    //if it's not checked - check if it's in list of buildings
                    //if it is - remove
                }
        }*/
        //input.onclick = updateGraph(this.value);
        //console.log("check box");
        label = document.createElement('label');
        label.htmlFor = this.labels[i];
        label.appendChild(document.createTextNode(this.labels[i]));
        myDiv.appendChild(input);
        myDiv.appendChild(label);
    }
}


//document.getElementsByTagName()

//elements = element.getElementsByTagName(tagName)

/*
 * var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('text for label after checkbox'));

container.appendChild(checkbox);
container.appendChild(label);
 */