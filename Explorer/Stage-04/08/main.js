const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
    },
]

let patientsNames = []

for (let patient of patients) {
    console.log(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight} kg e tem ${patient.height} de altura `)
}
console.log(`Total de paciente cadastrados é de: ${patients.length}`)
