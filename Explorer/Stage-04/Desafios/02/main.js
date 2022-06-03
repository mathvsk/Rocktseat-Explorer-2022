const listStudents = [
    {
        name: "Matheus",
        firstNote: 7.4,
        secondNote: 9
    },
    {
        name: "Kauana",
        firstNote: 9,
        secondNote: 9
    },
    {
        name: "Marllos",
        firstNote: 7,
        secondNote: 1
    },
    {
        name: "Jaíne",
        firstNote: 9.3,
        secondNote: 5.7
    },
    {
        name: "Ester",
        firstNote: 7.4,
        secondNote: 6.6
    }
]

const calculateAverage = (note1, note2) => (note1 + note2) / 2
// function calculateAverage(note1, note2) {
//     const result = (note1 + note2) / 2
//     return result
// }

for (let student of listStudents) {
    let average = calculateAverage(student.firstNote, student.secondNote)
    if (average >= 7) {
        alert(`A média do(a) ${student.name} foi de ${average} \n >Aluno(a) aprovado!`)
    } else {
        alert(`A média do(a) ${student.name} foi de ${average} \n >Aluno(a) reprovado!`)
    }
}