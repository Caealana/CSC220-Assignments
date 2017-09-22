// <editor-fold desc="CustomGameLoop">
function CustomGameLoop() {
    
}

CustomGameLoop.prototype = new GameLoop();

CustomGameLoop.prototype.generateFakePointData = function(f, n, color) {
    var returnData = new PointData();
    returnData.setColor(color);
    var step = 1000 / n;
    var randomSpread = 200;
    for (var i = 0; i < n; i++) {
        var x = i * step;
        var point = 
                new Point(
                    x + (Math.random() * randomSpread - randomSpread / 2), 
                    f(x) + (Math.random() * randomSpread - randomSpread / 2));
        returnData.addPoint(point);
    }
    return returnData;
}

CustomGameLoop.prototype.initialize = function(canvas) {
    GameLoop.prototype.initialize.call(this, canvas);
    this.stars1 = [new Point(100, 100), new Point(200, 50), new Point(400,400),
    new Point(400, 204)];
   
    // add initialization here
}

CustomGameLoop.prototype.draw = function(g) {
    g.fillStyle = "black";
    g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for(var i = 0; i< this.stars1.length; i++){
        var point = this.stars1[i];
        g.beginPath();
        g.arc(point.getX(), point.getY(), 2, 9, 2*Math.PI);
        g.closePath();
    }
    // add drawing here
}
// </editor-fold>

function initialize() {
    var customGameLoop = new CustomGameLoop();
    customGameLoop.initialize(document.getElementById("canvas"));
}

window.onload = initialize;