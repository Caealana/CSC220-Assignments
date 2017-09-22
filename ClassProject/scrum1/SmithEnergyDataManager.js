//SmithEnergyDataManager
function SmithEnergyDataManager() {

}

SmithEnergyDataManager.prototype = new DataManager();

SmithEnergyDataManager.prototype.initialize = function () {
    for (var i = 0; i < this.data.length; i++) {
        //goes through each object in JSON
        var obj = this.data[i];
        if (i === 0) { //first object contains house names
            for (var key in obj) {
                if (key !== "FIELD1") {//skip first field - has type
                    var newDataSeries =
                            new SmithEnergyDataSeries();
                    newDataSeries.setTitle(obj[key]);
                    newDataSeries.setBuilding(obj[key]);
                    newDataSeries.setXFieldName
                            ("Date and Time");
                    this.dataSeries.push(newDataSeries);
                }
            }
        }
        else if (i === 1) { //add type of energy to title name
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    var newTitle =
                            this.dataSeries[counter - 1].getTitle()
                            + " " + obj[key]
                            + " Consumption";
                    this.dataSeries[counter - 1]
                            .setTitle(newTitle);
                    this.dataSeries[counter - 1].
                            setEnergyType(obj[key]);
                }
                counter += 1;
            }
        }
        else if (i === 2) { //obj 3 contains meter id
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    this.dataSeries[counter - 1]
                            .setMeterName(obj[key]);
                }
                counter += 1;
            }
        }
        else if (i === 3) { //obj 4 contains units
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    var split = obj[key].split(" ");
                    //example: ["Chapin", "House", "-", "Electricity", "(kWh)"]
                    var currentData =
                            this.dataSeries[counter - 1];
                    var newTitle =
                            currentData.getTitle() + " "
                            + split[4];
                    currentData.
                            setUnits(split[4]);
                    currentData.
                            setXFieldName("Date And Time");
                    currentData.
                            setYFieldName(this.dataSeries[counter - 1]
                                    .getEnergyType() + " " + split[4]);
                    currentData.
                            setMeterName(obj[key]);
                    currentData.
                            setTitle(newTitle);
                    //console.log(this.dataSeries[counter-1].getTitle());
                }
                counter += 1;
            }
        }

        else if (i > 3) {
            var counter = 0;
            var time = obj["FIELD1"];
            //console.log(this.dataSeries.length);
            for(var j = 0; j < this.dataSeries.length; j++){
                var value = parseFloat(obj["FIELD" + (j + 2).toString()]);
                //console.log(value);
                if(i === 4){
                    this.dataSeries[j].clearDataPoints();
                }
                if(isNaN(value) === false){
                    //console.log(j);
                    //console.log(time);
                    //console.log(value);
                    this.dataSeries[j].addDataPoint(new DataPoint(time,
                    value));
                    console.log(this.dataSeries[i].getDataPoints().length)
                    //console.log(this.dataSeries[i].getDataPoints()[0]);
                }
            }
        }
    }
}

//dataJson[0] = house name
//dataJson[1] = type of Energy
//dataJson[2] = meterId
//dataJson[3] = house - units
//dataJson[i>3] -> field 1 = time stamp[date, time]
//get field number - links all of the data belonging to one meter

