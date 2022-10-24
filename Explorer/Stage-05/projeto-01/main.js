const inputNumber = document.querySelector('.inputNumber');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const btnTry = document.querySelector('.btnTry');
btnTry.addEventListener('click', (e) => {
    e.preventDefault();

    if (Number(inputNumber.value) == randomNumber) {
        toogleScreen();

        document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativa(s)`;

        return 
    }
    
    inputNumber.value = "";
    xAttempts++;
});

const btnAgain = document.querySelector('.btnAgain');
btnAgain.addEventListener('click', handleResetClick)

document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
})

function handleResetClick() {
    toogleScreen();

    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1;
}

function toogleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}