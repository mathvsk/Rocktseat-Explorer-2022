const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let message = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))

let attempts = 1
5
if (message == randomNumber && attempts == 1)  {
    alert(`Voce acertou em ${attempts} tentativa. O número que eu estava pensando era ${randomNumber}`)
} else { 
    while (message != randomNumber) {
        attempts++
        message = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))
    }
    alert(`Voce acertou em ${attempts} tentativas. O número que eu estava pensando era ${randomNumber}`)
}