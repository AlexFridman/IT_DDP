function range(start, stop, step) {
    if (step === 0) {
        return new Array();
    }

    var step = step || 1;

    if (step < 0) {
        var stop_ = Math.min(start, stop);
        var start_ = Math.max(start, stop);
    } else {
        var stop_ = Math.max(start, stop);
        var start_ = Math.min(start, stop);
    }

    var start = start_
    var stop = stop_

    var len = Math.floor((stop - start) / step) + Math.sign((stop - start) % step);
    var array = new Array();

    for (var i = 0; i < len + 1; i += 1) {
        array[i] = start + i * step;
    }

    return array;
}

alert(range(1, 10));
alert(range(1, 10, 2));
alert(range(1, 10, -1));
alert(range(5, 2, -1));