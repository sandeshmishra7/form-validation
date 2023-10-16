var form = document.querySelector('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('confirm');
var phone = document.getElementById('phone');
var radio = document.querySelectorAll('.radio-btn');
var file = document.getElementById('file');
var error = document.getElementById('error');
var radioError = document.getElementById('radio-error');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();
});

function setError(element, message) {
    var inpWrapper = element.parentElement;
    var errorDisplay = inpWrapper.querySelector('.error');

    errorDisplay.innerText = message;
    inpWrapper.classList.add('error');
    inpWrapper.classList.remove('success');
}

function setSuccess(element) {
    var inpWrapper = element.parentElement;
    var errorDisplay = inpWrapper.querySelector('.error');

    errorDisplay.innerText = '';
    inpWrapper.classList.add('success');
    inpWrapper.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    var phoneValue = phone.value.trim();

    if (usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (phoneValue === '') {
        setError(phone, 'Number is required');
    } else if (phoneValue.length < 10) {
        setError(phone, 'Phone must be at least 10 characters.')
    } else {
        setSuccess(phone);
    }

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            setSuccess(radio[i]);
            break;
        }
        else {
            setError(radio[i], 'Please check any option!');
            radioError.style.color = 'red';
        }
    }

    if (file.files.length === 0) {
        setError(file, 'Please select a file!');
        error.style.color = 'red';
    } else {
        setSuccess(file);
    }
}

username.addEventListener('blur', function () {
    if (username.value === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }
});

email.addEventListener('blur', function () {
    if (email.value === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
});

password.addEventListener('blur', function () {
    if (password.value === '') {
        setError(password, 'Password is required');
    } else if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }
});

password2.addEventListener('blur', function () {
    if (password2.value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2.value !== password.value) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
});

phone.addEventListener('blur', function () {
    if (phone.value === '') {
        setError(phone, 'Number is required');
    } else if (phone.value.length < 10) {
        setError(phone, 'Phone must be at least 10 characters.')
    } else {
        setSuccess(phone);
    }
});

file.addEventListener('blur', function () {
    if (file.files.length === 0) {
        setError(file, 'Please select a file!');
        error.style.color = 'red';
    } else {
        setSuccess(file);
    }
})