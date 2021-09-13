const regeneratePasswordEl = document.getElementById('regenerate-password');
const passwordDisplayEl = document.getElementById('password-display');
const copyEl = document.getElementById('copy');
const minusEl = document.getElementById('minus');
const plusEl = document.getElementById('plus');
const passwordLengthEl = document.getElementById('password-length');

// Password length
let passwordLength = parseInt(passwordLengthEl.innerText);

// Copy password
function copyPassword() {
    if (passwordDisplayEl.value == '') {
        alert('⚠ Please generate a password first ⚠');
    } else {
        passwordDisplayEl.select();
        navigator.clipboard.writeText(passwordDisplayEl.value);
        alert("Password copied successfully 😀");
    }
}

// Generate Password
function generatePassword(passLen) {
    const randomNumber = Math.floor(Math.random() * 100);
    let result = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&_-`:;',.?";
    const charactersLength = characters.length;

    for (let i = 0; i < passLen - 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Password must have two digit
    if (randomNumber < 10) {
        passwordDisplayEl.value = result + randomNumber + 1;
    } else {
        passwordDisplayEl.value = result + randomNumber;
    }
}

// Password new length
function passwordLengthChose(value) {
    passwordLength = parseInt(passwordLengthEl.innerText) + value;
    passwordLengthEl.innerText = passwordLength;
}

regeneratePasswordEl.addEventListener('click', () => generatePassword(passwordLength));
minusEl.addEventListener('click', () => passwordLengthChose(-1));
plusEl.addEventListener('click', () => passwordLengthChose(1));
copyEl.addEventListener('click', copyPassword);
