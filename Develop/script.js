// Assignment code here
var password = "";

//generate random UPPERCASE
function getUpperCase() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}

//generate random LOWERCASE
function getLowerCase() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

//generate random NUMBER
function getNumber() {
  var number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
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
  var userLength = prompt("Enter the amount of characters you want your password to be. It must be at least 8 characters, but no longer than 128 characters.");
  var passwordLength = parseInt(userLength);

  console.log(passwordLength);

  //prompt if user wants UPPERCASE
  var confirmUpperCase = confirm("Do you want you password to include uppercase characters?");
  
    //if yes (true), run getUpperCase() function
    

  //prompt if the users wants LOWERCASE
  var confirmLowerCase = confirm("Do you want the password to include LOWERCASE characters?");
    
    //if yes (true), run getLowerCase() function
    
    
  //prompt if the user wants NUMBERS
  var confirmNumber = confirm("Do you want the password to include NUMBERS?");
  
    //if yes (true), run getNumber() function
  

  //prompt if the user wants SYMBOLS
  var confirmSymbol = confirm("Do you want the password to include SYMBOLS?");

    //if yes (true), run getSymbol() function
   

    for (i = 0; i < passwordLength; i++) {
      if (confirmLowerCase) {
        var randomLower = getLowerCase();
      }
      if (confirmUpperCase) {
        var randomUpper = getUpperCase();
        //console.log(randomUpper);
      }
      if (confirmNumber) {
        var randomNumber = getNumber();
        //console.log(randomNumber);
      }
      if (confirmSymbol) {
        var randomSymbol = getSymbol();
        //console.log(randomSymbol);
      }

      var randomPassword = randomUpper.concat(randomLower, randomNumber, randomSymbol);
      return randomPassword;
    
    }

    alert("Your randomly generated password is " + password);
}; //end of generatePassword function

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
