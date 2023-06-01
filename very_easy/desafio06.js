/* Escrava uma função que recebe uma string e retorna cada plavra da string invertida e em letras minusculas, porem com as palavras na mesma ordem.Assuma que a tring não possui nenhuma letra com acento, nùmero ou caractere especial, apenas letras e espaços

O ponto chave é a separação das palavras. Além disso, o desafio facilita ao deixar claro que a string deve ficar toda minúscula e que conterá apenas letras sem acento e espaços.

Para conseguir inverter apenas as letras das palavras separadamente precisamos que elas sejam separadas e o método split pode nos ajudar com isso. Até agora usamos ele para separar todos os caracteres, mas também podemos fazer ele dividir uma string usando caracteres específicos como o espaço " ":

*/

function invertWords(str) {  
    const wordsArray = str.split(' ')
    const invertedWords = wordsArray.map(word => {
    
        const lowerCaseWord = word.toLowerCase()
    
         return lowerCaseWord.split('').reverse().join('')
    })
  
  return invertedWords.join(' ')
}