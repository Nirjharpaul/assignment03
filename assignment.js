

function kilometerToMeter(kilometer) {
    meter = kilometer * 1000
    return meter;
}



function budgetCalculator(watchInput, mobileInput, laptopInput) {
    const watch = 50;
    const mobile = 100;
    const laptop = 500;
    var sum = watch * watchInput + mobile * mobileInput + laptop * laptopInput;
    return sum
}



function hotelCost(day) {
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
    else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        remaining = day - 20;
        var third10days = remaining * 50;
        cost = first10days + second10days + third10days;
    }
    return cost;
}



function megaFriend(friendName) {
    var largename = '';
    for (var i = 0; i < friendName.length; i++) {
        var element = friendName[i];
        if (element > largename) {
            largename = element;
        }
    }
    return largename;
}

