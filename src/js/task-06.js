


const inputRef = document.querySelector('#validation-input')



inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValueLength = event.currentTarget.value.length;
    const examinationValue = Number(inputRef.dataset.length)

    inputRef.classList.remove('valid', 'invalid')

    if (inputValueLength === examinationValue) {
       return inputRef.classList.add('valid')
    }
   return inputRef.classList.add('invalid');
}


