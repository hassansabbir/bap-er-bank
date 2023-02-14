document.getElementById('btn-submit').addEventListener('click', function(){
    const emailInput = document.getElementById('email-input');
    const emailInputValue = emailInput.value; 
    const passwordInput = document.getElementById('password-input');
    const passwordInputValue = passwordInput.value;

    if(emailInputValue === 'baperbank@gmail.com' && passwordInputValue === 'baperbank'){
        window.location.href = 'bank-page.html'
    }
    else(
        alert('invalid user')
    )

})