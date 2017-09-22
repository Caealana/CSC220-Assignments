// <editor-fold desc="Point">
//author: Florian Block
function Point(x, y)
{
    this.setX(x);
    this.setY(y);
}

Point.prototype.getX = function() {
    return this.x;
}

Point.prototype.getY = function() {
    return this.y;
}

Point.prototype.setX = function(x) {
    this.x = x;
}

Point.prototype.setY = function(y) {
    this.y = y;
}

Point.prototype.clone = function() {
    return new Point(this.x, this.y);
}

Point.prototype.subtract = function(p) {
    return new Point(this.x - p.x, this.y - p.y);
}

Point.prototype.add = function(p) {
    return new Point(this.x + p.x, this.y + p.y);
}
// </editor-fold> 