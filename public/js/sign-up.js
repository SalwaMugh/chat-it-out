const username = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const usernameErr = document.getElementById("usernameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

// regex validation
const validUserName = /^[a-zA-Z0-9]{5,}$/;
const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// username input field validation
username.addEventListener("input", () => {

    if (username.value.length === 0) {
        usernameErr.textContent = "Please fill the empty field";
    } else {
        if (!validUserName.test(username.value)) {
            usernameErr.textContent = "Try Again";
        }
        else usernameErr.textContent = "";
    }
});

// email input field validation 
email.addEventListener("input", () => {

    if (email.value.length === 0) {
        emailErr.textContent = "Please fill the empty field";
    } else {
        if (!validEmail.test(email.value)) {
            emailErr.textContent = "Please enter a proper email";
        }
        else emailErr.textContent = "";
    }
});

//password input field validation 
password.addEventListener("input", () => {

    if (password.value.length === 0) {
        passwordAlert('Please Fill All Fields ', 'red');
    } else {
        if (strongPassword.test(password.value)) {
            passwordAlert('Strong', 'green');
        }
        else if (mediumPassword.test(password.value)) {
            passwordAlert('Medium', 'orange');
        }
        else {
            passwordAlert('Weak', 'red');
        }
    }

});

const passwordAlert = (content, style) => {

    passErr.textContent = content;
    passErr.setAttribute('style', "color:" + style + ";");

}



