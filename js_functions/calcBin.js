convertToDecimal = num => {
    let res=[]
    for(let i=1;i<=num.length;i++) res.push(parseInt(num[num.length-i])*2**(i-1))
    return res.reduce((acc,el)=>acc+el)
} // Sintaxe: convertToDecimal('número binário') --- Retorna: retorna o número em decimal

convertToBinary = num => {
    let res=[]
    while (num != 0) num % 2 == 0 ? (num/=2, res.push(0)) : (num = (num-1)/2, res.push(1))
    return res.reverse().toString().replace(/,/g, '')
} // Sintaxe: convertToDecimal('úumero decimal') --- Retorna: retorna o número em binário

// Operações: 
sum = (a,b) => convertToDecimal(a) + convertToDecimal(b) // Operador: sum
subtract = (a,b) => convertToDecimal(a) - convertToDecimal(b) // Operador: subtract
multiply = (a,b) => convertToDecimal(a) * convertToDecimal(b) // Operador: multiply
divide = (a,b) => convertToDecimal(a) / convertToDecimal(b) // Operador: divide

calculate = fn => (a,b) => fn(a, b)
// Sintaxe: calculate(operação)('número binário', 'número binário')