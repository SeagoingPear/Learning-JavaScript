function calcular(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b)
        }
    }
}
// calcular = a => b => fn => fn(a, b)  --Simplificando com arrow function--
        

somar = (a, b) => a + b
subtrair = (a, b) => a - b
multiplicar = (a, b) => a * b
dividir = (a, b) => a / b

console.log(
    calcular(10)(5)(somar), 
    calcular(10)(5)(subtrair),
    calcular(10)(5)(multiplicar),
    calcular(10)(5)(dividir)
)
