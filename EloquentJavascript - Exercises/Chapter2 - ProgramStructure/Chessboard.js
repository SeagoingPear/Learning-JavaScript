let size = 8
for (let c = 1; c <= size; c++) {
    let res = ''
    for (let i = 1; i <= (size/2); i++) res += ' #' 
    if(c % 2 == 0)console.log(res.replace(' ', ''))
    else console.log(res)
}