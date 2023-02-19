



const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
   event.preventDefault()

    // const formData = new FormData(event.currentTarget)

   if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
    alert('sdcscsd')
   }
    
    const user = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,

    }
    console.log(user)

    form.reset()
}







