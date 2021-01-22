

function kilometerToMeter(kilometer) {
    meter = kilometer * 1000
    return meter;
}


var day = 12;
var cost = 0;
if (day <= 10) {
    cost = day * 100
}
else if (day <= 20) {
    var first10days = 10 * 100;
    var remaining = day - 10;
    var second10days = remaining * 80;
    cost = first10days + second10days;
}