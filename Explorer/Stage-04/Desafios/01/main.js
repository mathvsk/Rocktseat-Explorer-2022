// Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
// - [x]  A soma dos dois números;
// - [x]  A subtração dos dois números;
// - [x]  A multiplicação dos dois números;
// - [x]  A divisão dos dois números;
// - [x]  O resto da divisão dos dois números;

// - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

//#region Funções
function sum(a, b) {
    const sumResult = a + b
    if (sumResult % 2 == 0) {
        return (`- A soma entre os números ${numerOne} e ${numberTwo} é = ${sumResult}
        O resultado é um número par`)
    } else {
        return (`- A soma entre os números ${numerOne} e ${numberTwo} é = ${sumResult}
        O resultado é um número ímpar`)
    }
}

const subtraction = (a, b) => a - b
const multiplication = (a, b) => a * b
const division = (a, b) => a / b
const rest = (a, b) => a % b
//#endregion

let numerOne = Number(prompt("Insira o primeiro valor: "))
let numberTwo = Number(prompt("Insira o segundo valor"))

while (true) {
    while (numerOne == numberTwo) {
        alert("Por favor, insira números diferentes")
        numerOne = Number(prompt("Insira o primeiro valor: "))
        numberTwo = Number(prompt("Insira o segundo valor"))
    }
    const resultSum = sum(numerOne, numberTwo)

    alert(`
${resultSum}    
- A subtração entre ${numerOne} e ${numberTwo} é = ${subtraction(numerOne, numberTwo)}
- A multiplicação entre ${numerOne} e ${numberTwo} é = ${multiplication(numerOne, numberTwo)}
- A divisão entre ${numerOne} e ${numberTwo} é = ${division(numerOne, numberTwo).toFixed(2)}
- O resto da divisão entre ${numerOne} e ${numberTwo} é = ${rest(numerOne, numberTwo)}
    `)

    let exit = Number(prompt("Digite 1 para sair!!"))
    if (exit == 1) {
        break
    }

    numerOne = Number(prompt("Insira o primeiro valor: "))
    numberTwo = Number(prompt("Insira o segundo valor"))
}


