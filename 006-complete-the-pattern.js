// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

//     Note: Returning the pattern is not the same as Printing the pattern.
//         Rules / Note:
// If n < 1 then it should return "" i.e.empty string.
// There are no whitespaces in the pattern.


function pattern(n) {
    // Happy Coding ^_^
    if (n < 1) return ""
    var output = []

    for (let i = 1; i <= n; i++) {
        var line = ""

        for (let j = n; j >= i; j--) {
            line += j
        }
        output.push(line)
    }
    return output.join('\n')
}