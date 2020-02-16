// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

function past(h, m, s) {
    //#Happy Coding! ^_^
    return ((h * 3600 + m * 60 + s) * 1000);
}