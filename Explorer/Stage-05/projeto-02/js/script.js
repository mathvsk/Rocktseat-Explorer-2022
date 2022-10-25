import { Modal } from "./modal.js";
import { AlertError } from "./alert.js";
import { notNumber, calculateIMC } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.addEventListener('input', () => AlertError.close());
inputHeight.addEventListener('input', () => AlertError.close());

form.onsubmit = (event) => {
    event.preventDefault();
    
    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNaN = notNumber(weight) || notNumber(height);

    if (weightOrHeightIsNaN) {
        AlertError.open();
        inputWeight.value = "";
        inputHeight.value = "";
        return;
    }

    AlertError.close();
    
    const result = calculateIMC(weight, height);
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message;

    Modal.open();
}
