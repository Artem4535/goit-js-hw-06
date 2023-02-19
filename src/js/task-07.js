const inputRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');


inputRef.addEventListener('input', onChangeInputValue)

spanTextRef.style.fontSize = `${inputRef.value}px`


function onChangeInputValue(event) {
    const currentValue = `${event.currentTarget.value}px`
    spanTextRef.style.fontSize = currentValue;
}






