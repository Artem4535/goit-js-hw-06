function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const buttonRef = document.querySelector('.change-color')



buttonRef.addEventListener('click', generetionRandomColor)



function generetionRandomColor(event) {
  const bodyRef = document.querySelector('body')
  bodyRef.style.backgroundColor = getRandomHexColor()
}




































// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
