// Your task is simply to count the total number of lowercase letters in a string.

// Solution#1
function lowercaseCount(str) {
    //How many?
    var result = 0
    if (str.match(/[a-z]/g)) {
        result = str.match(/[a-z]/g)
        return result.length
    } else {
        return 0
    }
}

// Solution#2
function lowercaseCount(str) {
    return (str.match(/[a-z]/) || []).length
}