/* Escreva uma função que recebe uma array e retorne um novo arrya com todas as posições invertidas do original sem altera-los. Não utilize os métodos do objeto global Array do javascript (reverse, map, forEach, etc).

O ponto chave aqui é uma estrutura de repetição básica para iterar sobre uma copia do array original, evitando que ele seja modificado.

Para resolver basta tulizar uma nova variavel para armanezar o array invertido e uma estrutura de repetição como o for referenciado o tamanho do array:
*/

function reverse(arr) {
    const reversedArray = []

    for(let i = 0; i < arr.length; i++) [
        reversedArray[i] = arr[arr.length -1 - i]
    ]
    return reversedArray
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(reverse(['Oh', 'Hi', 'Mark']))
console.log(reverse([false, true, true, true]))
console.log(reverse(['Its', 'not', true, 0]))