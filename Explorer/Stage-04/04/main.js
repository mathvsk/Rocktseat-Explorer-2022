let studentName = prompt("Digite seu nome:")

let noteOne = Number(prompt("Digite sua primeira nota: "))
let noteTwo = Number(prompt("Digite sua segunda nota: "))
let noteThree = Number(prompt("Digite sua terceira nota: "))

let result = ((noteOne + noteTwo + noteThree) / 3).toFixed(1)

if (result >= 60) {
    alert(`${studentName} sua nota final foi ${result}
    Parabéns voce passou!!`)
} else if  (result >= 30) {
    alert(`${studentName} sua nota final foi ${result}
    Estude para a recuperação!!`)
} else {
    alert(`${studentName} sua nota final foi ${result}
    Que pena voce reprovou!!`)
}



