function range(...params) {
    let res = []
    let start = 1
    let top = 1
    let step = 1
    if((params.length) == 1) top = params
    if((params.length) == 2) {
        top = params[1] 
        start = params[0]
    }
    if((params.length) == 3) {
        start = params[0]
        top = params[1] 
        step = params[2]
    }
    if( start < top) {
        while(start <= top) {
            res.push(start)
            start += step
        }
    } else if( start > top) {
        while(start >= top) {
            res.push(start)
            start -= step
        }
    }
    return res
}
console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))