// Function declaration
function sayHello() {
    console.log('Hello Wolrd!')
}
sayHello()


function sayHelloTo(name){
    console.log(`Hello ${name}!`)
}
sayHelloTo('Pablo')


function returnHi(){
    return 'Hi!'
}
const greeting = returnHi()
console.log(greeting)
console.log(returnHi())


function returnHiTo(name){
    return `Hi ${name}!`
}
console.log(returnHiTo('Pablo'))