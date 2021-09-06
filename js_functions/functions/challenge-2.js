const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true}
]
const avg = (acc, el, i, array) => i === array.length - 1 ? (acc + el) / array.length : acc + el
console.log(carrinho.filter(item => item.fragil).map(item => item.qtde * item.preco).reduce(avg))