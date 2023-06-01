/*Escreva uma função que receba um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).

O ponto chave é a recursão. Recursão é quando uma função chama ela mesma até chegar em um caso base simples que desencadeia a resolução do problema. Recursão é um conceito muito importante e comum na computação, ela permite que problemas grandes e complexos sejam quebrados em tarefas mais simples e claras.

Aqui os nossos casos base são quando nenhum ou apenas um "chunk" devem ser retornados. Caso sejam vários "chunk" eles vão se acumulando ao chamar a própria função novamente:

*/

function chunks(num) {
    if (num === 0){
        return ''
    }
    if (num === 1){
        return 'chunk'
    } else {
        return 'chunks-' + chunks(num -1)
    }
};

//Refatorando



console.log(chunks(4))
console.log(chunks(1))
console.log(chunks(8))
console.log(chunks(2))