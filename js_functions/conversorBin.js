convertToDecimal = num => {
    let res=[]
    for(let i=1;i<=num.length;i++) res.push(parseInt(num[num.length-i])*2**(i-1))
    return res.reduce((acc,el)=>acc+el)
}
convertToBinary = num => {
    let res=[]
    while (num != 0) num % 2 == 0 ? (num/=2, res.push(0)) : (num = (num-1)/2, res.push(1))
    return res.reverse().toString().replace(/,/g, '')
}