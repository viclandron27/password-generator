// Assignment code here
var length = "";

//generate random UPPERCASE
function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generate random LOWERCASE
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generate random NUMBER
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//generate random SYMBOL
function getSymbol() {
  var symbol = "!@#$%^&*(){}[]=<>,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

//click button to start the password generating
var generatePassword = function() {
  alert("Welcome to the Password Generator!");
  //length = prompt("What do you want the length of the password to be? Please enter 1 for at least 8 characters, 2 for no more than 128 characters, and 3 for both options.");
  
  var upper = getUpperCase();
  var lower = getLowerCase();
  var number = getNumber();
  symbol = getSymbol();


  console.log(upper, lower, number, symbol);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
