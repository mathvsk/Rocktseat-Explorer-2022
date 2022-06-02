let numberOne = Number(prompt("Digite o primeiro valor:"))
let numberTwo = Number(prompt("Digite o segundo valor:"))
let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restOfDivision = numberOne % numberTwo

alert(`
Números escolhidos: ${numberOne}, ${numberTwo}
- Soma = ${sum}
- Subtração = ${subtraction}
- Multiplicação = ${multiplication}
- Divisão = ${division}
- Resto divisão = ${restOfDivision}
`)
