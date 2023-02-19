const formInputText = document.querySelector('input#name-input')
const onInputResultSpan = document.querySelector('span#name-output')



formInputText.addEventListener('input', (event) => {
    const defaultValueInput = "Anonymous";

    if (event.currentTarget.value === '') {
        onInputResultSpan.textContent = defaultValueInput;
    } else {
        onInputResultSpan.textContent = event.currentTarget.value
    }
});