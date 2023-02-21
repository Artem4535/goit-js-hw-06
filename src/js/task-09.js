function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return generetionRandomColor()
}



const buttonRef = document.querySelector('.change-color')
const span = document.querySelector('.color')


buttonRef.addEventListener('click', generetionRandomColor)



function generetionRandomColor(event) {
  const bodyRef = document.querySelector('body')
  bodyRef.style.backgroundColor = getRandomHexColor()
  span.textContent = getRandomHexColor()
}



































// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
