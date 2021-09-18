countBs = (s) => {
    return countChar(s, 'B')
}
countChar = (s, p) => {
    let c = 0
    for (let i = 0; i < s.length; i++) {
        let element = s[i]
        if(element === p) c++
    }
    return c
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));