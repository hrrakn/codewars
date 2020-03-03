// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them.Only the ending ones.

function noBoringZeros(n) {
    // your code
    var newStr = n.toString();
    var re = /0+$/g;

    if (n != 0) {
        var result = newStr.replace(re, '')
        return Number(result)
    } else {
        return 0
    }
}