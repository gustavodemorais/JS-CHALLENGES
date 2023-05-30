/* desafio:Escreva uma função que recebe um número qualquer de números inteiros como argumento e retorne a média aritimetica entre eles.
*/

/*Primeira versão

function average(numbers) {
    let sum = 0

    numbers.forEach(number => {
        sum += number
    });

    const average = sum / numbers.length

    return average
}
*/

//segunda versão - usando o metodo reduce()

function average(...numbers) {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    
    return sum / numbers.length
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7))//6.875
console.log(average(2, 5, 7, 1, -2)) //2.6
console.log(average(10, 10, 10, 10, 9)) //9.8
console.log(average(25, 75)) //50


    