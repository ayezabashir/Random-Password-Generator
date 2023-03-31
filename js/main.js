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

