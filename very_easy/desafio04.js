/* Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um dos seus algarismo e depois concatene o resultado retornando um único número inteiro.

O ponto chave aqui é a separação dos algarismos de um número. Uma das formas que podemos usar para alcançar isso é converter o número para outros tipos mais fáceis de manipular individualmente, como strings, por exemplo.

Para resolver podemos converter o número para string, dessa forma podemos utilizar uma estrutura de repetição para iterar sobre a string elevando cada caractere ao quadrado individualmente e concatenando o resultado em uma string. No fim retornamos essa string convertida de volta para número:

function squareDigits(num) {
    const str = num.toString()
    let result = ""

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(Number(str[i]), 2).toString()
    }
    return Number(result)
}

Podemos também, além de usar strings, separar a string em um array de caracteres para podermos ter acesso aos métodos para arrays do próprio Javascript, como o map. Com isso podemos executar uma função em cada caractere do array e retornar um novo array com os resultados, que então são unidos em uma única string e convertidos para número em seguida:
*/

function squareDigits(num) {
    const digitsString = num.toString()
      const digitsArray = digitsString.split('')
      const squaredArray = digitsArray.map(number => number ** 2)
      const squaredString = squaredArray.join('')
    return Number(squaredString)
  }

console.log(squareDigits(3514))
console.log(squareDigits(94571))
console.log(squareDigits(24))
console.log(squareDigits(745821698))
  