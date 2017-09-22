/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var barWidth;
var c; //canvas
var ctx; //context
var boundsArr = []; //array of the bounds 
var arrIndex = 0;
var barsArr = [];
var pointsArr = [];
var dataIndex = 0 ; //initial dataSet

//dataSelected.push(DATA[0]);
var graphType = "bar"; //initial graph type



function Point(dataPoint, xCord, yCord){
    this.dataPoint = dataPoint;
    this.value = dataPoint.getValue();
    this.year = dataPoint.getLabel();
    this.xCord = xCord+(barWidth/2);
    this.yCord = yCord;
    this.pointRadius = 5;
}

Point.prototype.getValue = function(){
    return this.value;
   
}

Point.prototype.getYear = function(){
    return this.year;
}

Point.prototype.getX = function(){
    return this.xCord;
}

Point.prototype.getY = function(){
    return this.yCord
}

Point.prototype.drawYearLabel = function(xCord){ //creates label and adds it to html document
     //label for the bars
    //var yearLabel = document.createElement("div");
    //yearLabel.className = "barLabel";
    //yearLabel.style.position = "absolute";
    var yPosLabel = c.height - c.height/100;
    var xPosLabel = xCord + (barWidth/3);
    /*
    yearLabel.style.left = xPosi + "px";
    yearLabel.style.top = yPosi + "px";
    yearLabel.style.width = barWidth.toString() + "px";
    yearLabel.style.height = (window.innerHeight/100).toString() + "px";
    yearLabel.style.background = 'white';
    yearLabel.style.color = 'black';
    yearLabel.innerHTML = this.year;
    document.body.appendChild(yearLabel);*/
    ctx.font = "15px Arial";
    ctx.fillText(this.year,xPosLabel,yPosLabel);
    
    
}

Point.prototype.drawPoint= function(){
    ctx.beginPath();
    ctx.arc(this.xCord, this.yCord, this.pointRadius, 0*Math.PI,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
}

function Bar(dataPoint, xCord, yCord, multFactor){ //Bar Class. takes in dataPoint and creates a corresponding bar
    this.dataPoint = dataPoint;
    this.year = dataPoint.getLabel();
    this.value = dataPoint.getValue();
    this.multFactor = multFactor;
    this.leftBound;
    this.rightBound;
    this.topBound;
    this.botBound;
    
    this.xCord = xCord;
    this.yCord = yCord;
    
}

Bar.prototype.setBounds = function(){
    this.leftBound = Math.ceil(this.xCord);
    this.topBound = Math.ceil(this.yCord);
    this.rightBound = Math.ceil(this.xCord+barWidth);
    this.botBound = Math.ceil(this.yCord + (this.value)*(this.multFactor));
}

Bar.prototype.drawValueLabel = function(){
    var xPosYear = this.xCord + barWidth/3;
    var yPosYear = this.yCord - 5;
    ctx.font = "15px Arial";
    ctx.fillText(this.value,xPosYear, yPosYear);
}

Bar.prototype.drawBar = function(){ //creates Bars and adds them to html docu
    
    /*var graphBar = document.createElement("div");
    graphBar.className = "dataBar";
    graphBar.style.position = "absolute";
    graphBar.style.left = this.xCord.toString() +"px";
    graphBar.style.top = this.yCord.toString() + "px";
    graphBar.style.width = barWidth.toString() +"px";
    graphBar.style.height = ((this.value)*(this.multFactor)).toString() + "px";
    graphBar.style.background = 'cyan';
    graphBar.setAttribute("onmouseover", "highlightBar()");
    graphBar.setAttribute("onmouseout","unhighlightBar()");
    document.body.appendChild(graphBar);
    */
   
     //hit test bounds of the bars.
    
   
    ctx.fillRect(this.leftBound,this.topBound,Math.ceil(barWidth),
    Math.ceil((this.value)*(this.multFactor)));
    ctx.save();
    
    boundsArr[arrIndex] = [this.leftBound, this.rightBound,
        this.topBound, this.botBound];
    
    arrIndex = arrIndex+1;
    /*var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF1975";

    ctx.fillRect(this.xCord, this.yCord, barWidth, this.value);*/
}

Bar.prototype.drawYearLabel = function(){ //creates label and adds it to html document
     //label for the bars
    //var yearLabel = document.createElement("div");
    //yearLabel.className = "barLabel";
    //yearLabel.style.position = "absolute";
    var yPosLabel = c.height - c.height/100;
    var xPosLabel = this.xCord + barWidth/3;

    /*
    yearLabel.style.left = xPosi + "px";
    yearLabel.style.top = yPosi + "px";
    yearLabel.style.width = barWidth.toString() + "px";
    yearLabel.style.height = (window.innerHeight/100).toString() + "px";
    yearLabel.style.background = 'white';
    yearLabel.style.color = 'black';
    yearLabel.innerHTML = this.year;
    document.body.appendChild(yearLabel);*/
    ctx.font = "15px Arial";
    ctx.fillText(this.year,xPosLabel,yPosLabel);
    
    
}

Bar.prototype.getBounds = function(){
    return (this.leftBound, this.rightBound, this.topBound, this.botBound);
}

/*Bar.prototype.highlightBar = function(){
            var x = event.clientX;
            var y = event.clientY;
            var mouseOnBar = true;
            barMouseOn = document.elementFromPoint(x, y);
            barMouseOn.style.background = 'yellow';
            //console.log("changing yellow");

        }
        
Bar.prototype.unhighlightBar = function(){
            barMouseOn.style.background = 'cyan';
        }*/



function Graph(dataSeries){ //enter a specific dataSeries to display
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    this.dataSeries = dataSeries;
    this.name = dataSeries.getName();
    c.width  = window.innerWidth-window.innerWidth/35;
    c.height = window.innerHeight-window.innerHeight/10;
    c.style.background = "#E0E0EB";
    
   
   this.dataArray = dataSeries.getData();
   this.numBars = this.dataArray.length; //number of bars
   barWidth = c.width/this.numBars - (c.width/100); //the width of each bar is the wifth of the window divided by number of bars
   
   //find the multiplier value
   
    /*ctx.beginPath();
    ctx.moveTo(0, 0+c.height/10);    
    ctx.lineTo(0,c.height-(c.height/5));
    ctx.stroke();*/
}


Graph.prototype.getMultValue = function(){ //get the value to multiply the bars by so it fits the screen
    //first find the largest value of the data set
   var biggestVal = Number.NEGATIVE_INFINITY;
   var smallestVal = Number.POSITIVE_INFINITY;
   for( i = 0; i<this.dataArray.length; i++){
       var currValue = this.dataArray[i].getValue();
       if(currValue > biggestVal){
           biggestVal = currValue;
       }
       
       if(currValue < smallestVal){
           smallestVal = currValue;
       }
   }
   
   if(biggestVal < window.innerHeight){
        this.multFactor = window.innerHeight/biggestVal - window.innerHeight/300;
    }
    
    else{
        this.multFactor = biggestVal/window.innerHeight - 
                window.innerHeight/2000;
    }
}

Graph.prototype.updateTitle = function(){
   var graphTitle = document.getElementById("graphTitle");
   graphTitle.innerHTML = this.dataSeries.getName();
}

/*Graph.prototype.clearScreen = function(){
        //clear all the prexisting bars
    var allBars = document.getElementsByClassName('dataBar');
    while(allBars[0]) {
        allBars[0].parentNode.removeChild(allBars[0]);
    }
    
    //clears all the prexisting labels
    var allLabels = document.getElementsByClassName('barLabel');
        while(allLabels[0]) {
        allLabels[0].parentNode.removeChild(allLabels[0]);
    }
}

*/
Graph.prototype.createGraphBars = function(){

    var xCord = 5; //starting xCord of the first bar
    var yCord;
    var currentBar;
    var currentData;
    for( i=0; i<this.numBars; i++){
        
        currentData = this.dataArray[i];
        yCord = c.height - (this.multFactor*currentData.getValue()) 
                - c.height/30;
        //console.log("this is yCord in createGraphBars" + yCord.toString());
        var yearLabel = currentData.getLabel();
        currentBar = new Bar(currentData, xCord, yCord, this.multFactor);
        barsArr = barsArr + [currentBar];
        currentBar.setBounds();
        currentBar.drawBar();
        currentBar.drawYearLabel();
        xCord = xCord + barWidth+10;
        

    }
}

Graph.prototype.createPoints = function(){
    var xCord = 5; //starting xCord of the first bar
    var yCord;
    var currentPoint;
    var currentData;
    
    for( i=0; i<this.numBars; i++){
        
        currentData = this.dataArray[i];
        yCord = c.height - (this.multFactor*currentData.getValue()) 
                - c.height/30;
        //console.log("this is yCord in createGraphBars" + yCord.toString());
        var yearLabel = currentData.getLabel();
        currentPoint = new Point(currentData, xCord, yCord);
        currentPoint.drawPoint();
        currentPoint.drawYearLabel(xCord);
        pointsArr.push(currentPoint);

        xCord = xCord + barWidth+10;
        

    }
}

Graph.prototype.connectPoints = function(){
    var startPoint = true;
    ctx.beginPath();
    /*
     * 
     ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();
     * 
     * 
     */

    
    for(var i = 0; i<pointsArr.length; i++){
        if(startPoint===true){
            ctx.moveTo(pointsArr[i].getX(), pointsArr[i].getY());
            startPoint = false;
        }
        
        else{
            ctx.lineTo(pointsArr[i].getX(), pointsArr[i].getY());
            ctx.stroke();
            
        }
        
        
    }
}



/*function runNorth(){
            var graph = new Graph(series1);
            graph.displayBars();
        }
        
function runAmh(){
            var graph = new Graph(series2);
            graph.displayBars();
        }
        
function runEast(){
            var graph = new Graph(series3);
            graph.displayBars();
        }
*/

function setDataSet(selectedIndex){

    if(selectedIndex===0){
        dataIndex = 0;

    }
    else if(selectedIndex ===1){
        dataIndex = 1;

    }
    
    else if(selectedIndex === 2){
        dataIndex = 2;
    }
    
}

function setGraphType(selectedIndex){
    if(selectedIndex === 0){
        
    }
    
    else if(selectedIndex === 1){
        
    }
}


document.getElementById("myCanvas").addEventListener
('mousemove',function onMouseMove(e){
    var offset = this.getBoundingClientRect();
    var position = {
        x : e.clientX - offset.left,//position.x
        y : e.clientY - offset.top
    }
            
        /*var xRedraw=null;
        var yRedraw = null;
        var widthRedraw=null;
        var heightRedraw=null;
        var touchBar;*/
    for(var i =0; i<boundsArr.length; i++){
        var currentBarBounds = boundsArr[i];
        
        if(position.x > currentBarBounds[0] && position.x < currentBarBounds[1]
                && position.y > currentBarBounds[2] 
                && position.y < currentBarBounds[3])
        { //if mouse pointer in between x bounds of bar
            
           
                //console.log([position.x, currentBarBounds[2], currentBarBounds[3]]);
                ctx.fillStyle = "#B27FE6";
                ctx.fillRect(currentBarBounds[0],currentBarBounds[2],
                Math.ceil(barWidth),
                Math.ceil(currentBarBounds[3]+.5-currentBarBounds[2]));
                /*xRedraw = currentBarBounds[0];
                yRedraw = currentBarBounds[2];
                widthRedraw = Math.ceil(barWidth);
                heightRedraw = Math.ceil(currentBarBounds[3]
                        +.5-currentBarBounds[2]);*/
            
            //draw value above highlighted bar
  
                
            
            
            
        }
        
        else{
            ctx.fillStyle = "black";
                ctx.fillRect(currentBarBounds[0],currentBarBounds[2],
                    Math.ceil(barWidth),
                    Math.ceil(currentBarBounds[3]+.5-currentBarBounds[2]));
        }
        
        
        //if the mouse isnt in bounds and the previous fill style was green
        //means we have 
    }
    //left,right,top,bottom
    /*
    this.leftBound = Math.ceil(this.xCord);
    this.topBound = Math.ceil(this.yCord);
    this.rightBound = Math.ceil(this.xCord+barWidth);
    this.botBound = Math.ceil(this.yCord + (this.value)*(this.multFactor));
     * 
     */
});

function displayGraph(){
    if (graphType === "bar"){
        
    }
}


initializeData();
var graph = new Graph(series1);
graph.updateTitle();
graph.getMultValue();
graph.createPoints();
graph.connectPoints();





//gather the data points (like for bar --the starting x,y and the height and
//and width in a package) so then you can just loop through all the bar elements
//and draw each of them