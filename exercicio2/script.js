function quantidadeDeItens (array1, array2, array3){
    console.log ("Exercicio A:","\nQuantidade de elementos array 1:", array1.length, "\nQuantidade de elementos array 2:", array2.length, "\nQuantidade de elementos array 3:",array3.length)
}
function imprimirArray (array1, array2, array3){
    console.log ("Quantidade de elementos array 1:", array1, "\nQuantidade de elementos array 2:", array2,"\nQuantidade de elementos array 3:", array3)
    console.log ("Algum item está inculido no 1º e no 3º array?", numeros.includes(5))
    console.log ("Algum item está inculido no 1º e no 3º array?", numeros.includes("tomate") )
}
const numeros = [7, 5, 23, 17] 
let strings = ["maçã", "batata", "pizza", "agua"]
let ambos = [5, "tomate", true]
quantidadeDeItens (numeros, strings, ambos)
imprimirArray  (numeros, strings, ambos)