function notNumber(value) {
    return isNaN(value) || value == ""
}

function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

export { notNumber, calculateIMC };