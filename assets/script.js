// Assignment Code

var generateBtn = document.querySelector("#generate");

// ---- ARRAYS OF CHARACTERS AND NUMBERS THAT WILL BE AVAILABLE FOR PASSWORD // 

var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '<', '>', '?'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



// ---- FUNCTIONS

// Function for prompts 
function passwordCriteria() {
  var passwordLength = prompt("How many characters would you like your password to contain?");

  if (passwordLength < 8) {
    alert('Password length needs to be at least 8 characters.');
    return;
  }

  if (passwordLength > 128) {
    alert('The password needs to have a maximum of 128 characters.')
    return;
  }

  var includeNumbers = confirm("Click OK to confirm including numeric characters to your password.");
  if (!includeNumbers) {
    alert('The password needs to have at least 1 numeric character, 1 lower case letter, 1 upper case letter, and 1 special character.');
    return;
  }

  var includeLowerCaseLetters = confirm("Click OK to confirm including lower case letters to your password.");
  if (!includeLowerCaseLetters) {
    alert('The password needs to have at least 1 numeric character, 1 lower case letter, 1 upper case letter, and 1 special character.');
    return;
  }

  var includeUpperCaseLetters = confirm("Click OK to confirm including upper case letters to your password.");
  if (!includeUpperCaseLetters) {
    alert('The password needs to have at least 1 numeric character, 1 lower case letter, 1 upper case letter, and 1 special character.');
    return;
  }
  var includeSpecialCharacters = confirm("Click OK to confirm including special characters to your password."); 
  if (!includeSpecialCharacters) {
    alert('The password needs to have at least 1 numeric character, 1 lower case letter, 1 upper case letter, and 1 special character.');
    return;
  }

  var passwordOptions = {
    length: passwordLength,
    numbers: includeNumbers,
    lowerCase: includeLowerCaseLetters,
    upperCase: includeUpperCaseLetters,
    specialCharacters: includeSpecialCharacters,
  }

  return passwordOptions;

}


passwordCriteria();





function createPassword() {
  
  var options = passwordOptions();
  console.log(options)

  var soup = [];
  console.log(soup)

  if(options.includeNumbers){
    for (i = 0; i < includeNumbers.length; i++){
      soup.push(includeNumbers[i]);
    }
  }

  if(options.includeLowerCaseLetters){
    for (i = 0; i < includeLowerCaseLetters.length; i++){
      soup.push(includeLowerCaseLetters[i])
    }
  }

  if(options.includeUpperCaseLetters){
    for (i = 0; i < includeUpperCaseLetters.length; i++){
      soup.push(includeUpperCaseLetters[i]);
    }
  }

  if(options.includeSpecialCharacters){
    for (i = 0; i < includeSpecialCharacters.length; i++){
      soup.push(includeSpecialCharacters[i]);
    }
  }

var finalPassword = [];

for (let i = 0; i < options.length; i++){
  var chosenPassword = Math.floor(Math.random() * Math.floor(soup.length));
  finalPassword.push(soup[chosenPassword]);
}
console.log(finalPassword)

var shownPassword = finalPassword.join('');
console.log(shownPassword)

document.getElementById("#password").textContent = shownPassword;
}

createPassword();

