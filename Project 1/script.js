const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}



//Event listeners
//Create Event Listene for submit button
form.addEventListener('submit', function(e){
    // stop page from reloading on submit
    e.preventDefault();
    //Check if username input is empty
    if(username.value===''){
        showError(username,'username is required');
    }
    console.log(username.value);
});