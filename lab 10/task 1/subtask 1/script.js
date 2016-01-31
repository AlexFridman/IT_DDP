"use strict";
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get length() {
        return this.calcLength();
    }

    calcLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    scalar(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    toString() {
        return '[' + this.x + ',' + this.y + ',' + this.z + ']';
    }

    valueOf() {
        return new Array(this.x, this.y, this.z);
    }
}

var v = new Vector(1, 2, 3);
console.log(v);
console.log(v.plus(v));
console.log(v.valueOf());
