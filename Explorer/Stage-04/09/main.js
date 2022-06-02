const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 190
    },
    {
      name: "Alexandra",
      age: 27,
      weight: 70,
      height: 170
    },
    {
      name: "Carlos",
      age: 42,
      weight: 90,
      height: 180
    },
  ]

function CalcularIMC(weight, height){
    // Aqui o height ta sendo divido por 100 pq no objeto ele foi criado como um numero inteiro (190/170/180)
    // Poderia criar o height (1.90/1.70/1.80) que eliminaria essa divisao por 100. Por ex:
    // let calculo = (weight / (Math.pow(height, 2))).toFixed(2)

    let calculo = (weight / ((height / 100) ** 2)).toFixed(2)
    return calculo
}  

function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${CalcularIMC(patient.weight, patient.height)}
    `
  }

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    console.log(IMCmessage)
  }

