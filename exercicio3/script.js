
function copiaNumeros(array1, array2){
    console.log ("Exercicio A:")
    console.log ('Numero original:', array1, '\nNumero copia', array2)
}
/////////
function copiaStrings(array3, array4){
    console.log ("Exercicio B:")
    console.log ('String original:', array3, '\nString copia', array4)
}
/////////
function copiaAmbos(array5, array6){
    console.log ("Exercicio B:")
    console.log ('Ambos original:', array5, '\nAmbos copia', array6)
}

let numeros = [15, 29, 17, 9]
let numerosCopia = numeros.slice()

let strings = ["maçã", "batata", "pizza", "agua"]
let stringsCopia = strings.slice()
stringsCopia.pop()

let ambos = [5, "tomate", true]
let ambosCopia = ambos.slice()
ambos.splice(1)

copiaNumeros(numeros, numerosCopia)
copiaStrings(strings, stringsCopia)
copiaAmbos(ambos, ambosCopia)