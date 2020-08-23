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
  
  //prompt the length of the password
  length = prompt("What do you want the length of the password to be? Please enter 1 for at least 8 characters, 2 for no more than 128 characters, and 3 for both options.");
  
  //prompt if user wants UPPERCASE
  var confirmUpperCase = confirm("Do you want you password to include uppercase characters?");
  
    //if yes (true), run getUpperCase() function
    if (confirmUpperCase) {
      var upper = getUpperCase();
      console.log(upper);
    }

  //prompt if the users wants LOWERCASE
  var confirmLowerCase = confirm("Do you want the password to include LOWERCASE characters?");
    
    //if yes (true), run getLowerCase() function
    if (confirmLowerCase) {
      var lower = getLowerCase();
      console.log(lower);
    }
    
  //prompt if the user wants NUMBERS
  var confirmNumber = confirm("Do you want the password to include NUMBERS?");
  
    //if yes (true), run getNumber() function
    if (confirmNumber) {
      var number = getNumber();
      console.log(number);
    }

  //prompt if the user wants SYMBOLS
  var confirmSymbol = confirm("Do you want the password to include SYMBOLS");

    //if yes (true), run getSymbol() function
    if (confirmSymbol) {
        symbol = getSymbol();
        console.log(symbol);
    }

} //end of generatePassword function

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
