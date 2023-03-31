console.log("Welcome to Passsword Generator");

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("num");
const symbolInput = document.getElementById("symbols");


const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet = "qwertyuiopasdfghjklzxcvbnm";
const numSet = "0123456789";
const symbolSet = "!@#$%^&*()~_-?/+=|";


const getRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random(dataSet) * dataSet.length)];
}

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}

const generateRandomPass = (password = "") => {
    if (upperInput.checked) {
        password += getRandom(upperSet);
    }
    if (lowerInput.checked) {
        password += getRandom(lowerSet);
    }
    if (numberInput.checked) {
        password += getRandom(numSet);
    }
    if (symbolInput.checked) {
        password += getRandom(symbolSet);
    }
    if (password.length < totalChar.value) {
        return generateRandomPass(password);
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
generateRandomPass();

document.getElementById("btn").addEventListener("click", function () {
    generateRandomPass();
})
