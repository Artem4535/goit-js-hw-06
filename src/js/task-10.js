
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputRef = document.querySelector('input[type = "number"]')
const createButtonRef = document.querySelector('button[data-create]')
const desrtoyButtonRef = document.querySelector('button[data-destroy]')
const boxRef = document.querySelector('#boxes')
console.log("boxRef", boxRef)


createButtonRef.addEventListener('click', createBoxes)
desrtoyButtonRef.addEventListener('click', destroyBoxes)


function createBoxes(amount) { 
   amount = Number(inputRef.value)
  for (let i = 0; i < amount; i += 1) {
    const createElement = document.createElement('div')
    createElement.style.backgroundColor = getRandomHexColor();
    createElement.style.width = `${30 + i * 10}px`;
    createElement.style.height = `${30 + i * 10}px`;

    boxRef.append(createElement)
  }
}


function destroyBoxes() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}




 



