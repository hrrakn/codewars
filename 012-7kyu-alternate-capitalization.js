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