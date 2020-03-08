// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Solution1
function capitalize(s) {
    var even = []
    var odd = []
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            var upperCase = s.charAt(i).toUpperCase()
            even.push(upperCase)
            odd.push(s[i])
        } else {
            upperCase = s.charAt(i).toUpperCase()
            even.push(s[i])
            odd.push(upperCase)
        }
    }
    even = even.join('')
    odd = odd.join('')
    return [even, odd]
};

// Solution2
function capitalize(s) {
    var even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase : l).join("")
    var odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase : l).join("")
    return [even, odd]
}