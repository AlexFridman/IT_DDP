function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };

    this.plus = function (other) {
        return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    };

    this.scalar = function (other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    };

    this.toString = function () {
        return '[' + this.x + ',' + this.y + ',' + this.z + ']';
    };

    this.valueOf = function () {
        return new Array(this.x, this.y, this.z);
    };
};

v = new Vector(1, 2, 3);
alert(v);
alert(v.plus(v));
alert(v.scalar(v));
alert(v.valueOf());