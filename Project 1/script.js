const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// Function to update class and message for errors
function showError(input, message){
    //Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //Override the class- add error
    formControl.className = 'form-control error';
    //Get the small element for the error message
    const small = formControl.querySelector('small');
    // Override the text for small element using the input message
    small.innerText = message;
}

// Function to update class for success
function showSuccess(input){
//Get the parent element of the input field (.form-control)
const formControl = input.parentElement;
// Replace the class - add success
formControl.className = 'form-control success';
}

//Event listeners
//Create Event Listene for submit button
form.addEventListener('submit', function(e){
    // stop page from reloading on submit
    e.preventDefault();
   // Check to see if the fields are empty
    //Check if username input is empty
    if(username.value===''){
        showError(username,'username is required');
    } else{
        showSuccess(username);
    }

    //Check if email input is empty
    if(email.value===''){
        showError(email,'email is required');
    } else{
        showSuccess(email);
    }

    //Check if password input is empty
    if(password.value===''){
        showError(password,'password is required');
    } else{
        showSuccess(password);
    }

    //Check if cpassword input is empty
    if(cpassword.value===''){
        showError(cpassword,'password is required');
    } else{
        showSuccess(cpassword);
    }

    console.log(username.value);
});