/* Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabetica em minusculo.Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.
 
O ponto chave é a ordem das letras. Apenas com strings isso poderia ser algo pouco intuitivo, porém ao trabalharmos com arrays a ordenação se torna um processo mais simples. Além disso o desafio deixa claro que apenas letras separadas por espaço irão compor a string e podemos tratar todas elas como minúsculas, o que facilita ainda mais o processo.

Para resolver podemos converter a string para um array, assim podemos tirar vantagem do método sort que serve para ordenação. Inclusive a sua ordenação padrão é a tabela ASCII, que no nosso caso será o suficiente pois segue a ordem alfabética. Uma vez ordenadas as letras, basta retornarmos a última, pois será a de maior valor:

 */

function highestLetter(str) {	
    const lowerCaseString = str.toLowerCase()
	const lettersArray = lowerCaseString.split('')
    const sortedArray = lettersArray.sort()
  
    return sortedArray[sortedArray.length - 1]
}

console.log(highestLetter('Lorem ipsum dolore sec avanti'))
console.log(highestLetter('Hello'))
console.log(highestLetter('May the force be with you'))
console.log(highestLetter('Its over nine thousand'))