function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
Point.prototype.x = null;
Point.prototype.y = null;


function promtCoords() {
    for (; ;) {
        var error = 0;
        var coordsStr = prompt('Enter coords (x1 y1 x2 y2 ...)');
        if (coordsStr === 'e') {
            return;
        }
        var components = coordsStr.split(' ');
        if (components.length === 8) {
            for (var j = 0; j < components.length; j++) {
                if (!isNumber(components[j])) {
                    error = 1;
                }
            }
        }
        if (error === 1) {
            alert('Is not a coord list');
            continue;
        }
        var coords = new Array(4);
        for (var i = 0; i < 8; i += 2) {
            var x = parseInt(components[i]);
            var y = parseInt(components[i + 1]);

            coords[i / 2] = new Point(x, y);
        }
        return coords;
    }
}

function isOrtogonal(a, b, c) {
    return (b.x - a.x) * (b.x - c.x) + (b.y - a.y) * (b.y - c.y) === 0;
}

function isRectangle(a, b, c, d) {
    return isOrtogonal(a, b, c) &&
        isOrtogonal(b, c, d) &&
        isOrtogonal(c, d, a);
}

function isRectangleAnyOrder(a, b, c, d) {
    return isRectangle(a, b, c, d) ||
        isRectangle(b, c, a, d) ||
        isRectangle(c, a, b, d);
}


function promtRectangle() {
    for (; ;) {
        var coords = promtCoords();
        if (!isRectangle(coords[0], coords[1], coords[2], coords[3])) {
            alert('Not a rectangle');
            continue;
        }
        return coords;
    }
}

function promtPoint() {
    for (; ;) {
        var error = 0;
        var coordsStr = prompt('Enter coords x y');
        if (coordsStr === 'e') {
            return;
        }
        var components = coordsStr.split(' ');
        if (components.length === 2) {
            for (var j = 0; j < components.length; j++) {
                if (!isNumber(components[j])) {
                    error = 1;
                }
            }
        }
        if (error === 1) {
            alert('Is not a coord list');
            continue;
        }

        return new Point(parseInt(components[0]), parseInt(components[1]));
    }
}

function isPointBelongsToRectangle(p, rectangle) {
    minX = Math.min(rectangle[0].x, rectangle[1].x, rectangle[2].x, rectangle[3].x);
    minY = Math.min(rectangle[0].y, rectangle[1].y, rectangle[2].y, rectangle[3].y);
    maxX = Math.max(rectangle[0].x, rectangle[1].x, rectangle[2].x, rectangle[3].x);
    maxY = Math.max(rectangle[0].y, rectangle[1].y, rectangle[2].y, rectangle[3].y);

    return p.x >= minX && p.x <= maxX &&
        p.y >= minY && p.y <= maxY;
}

rectangle = promtRectangle();
point = promtPoint();
if (isPointBelongsToRectangle(point, rectangle)) {
    alert('True');
} else {
    alert('False');
}