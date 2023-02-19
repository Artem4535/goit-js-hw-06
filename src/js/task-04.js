const counterValue = {
    value: 0,

    decrement() {
        this.value -= 1;
    },
    
    increment() {
        this.value += 1
    }
}

const buttonValue = document.querySelector('#value')


const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')

buttonDecrement.addEventListener('click', onDecrementClick)

buttonIncrement.addEventListener('click', onIncrementClick)

function onDecrementClick() {
    counterValue.decrement()
    buttonValue.textContent = counterValue.value
}


function onIncrementClick() {
     counterValue.increment()
    buttonValue.textContent = counterValue.value
}


