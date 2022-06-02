let message = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))
const randomNumber = Math.round(Math.random() * 10)

let attempts = 1
while (message != randomNumber) {
    tentativas ++
    message = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))
}

alert(`Voce acertou em ${tentativas} tentativas. O número que eu estava pensando era ${randomNumber}`)