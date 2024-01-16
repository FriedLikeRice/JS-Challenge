// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts for password
function generatePassword(){
    var passLength = prompt("How many characters?");

    var lower = confirm("Do you want lowercase?");

    var upper = confirm("Do you want uppercase?");

    var num = confirm("Do you want numbers?");

    var special = confirm("Do you want special characters?");

    //min length of password set to 0 characters
    var minLength = 0;

    //min set min for each pass value   
    var minNum = "";
    var minUpper = "";
    var minLower = "";
    var minSpecial = "";

    var functionArray = {
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },
        getLowerCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
      
        getUpperCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
      
        getSpecialCharacters: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }
      
      };
// Checks to make sure user selected ok for all and uses empty minimums from above
      
    if (num === true) {
    minNum = functionArray.getNumbers();
    minLength++;
}

    if (lower === true) {
    minLower = functionArray.getLowerCases();
    minLength++;

}

    if (upper === true) {
    minUpper = functionArray.getUpperCases();
    minLength++;

}

    if (special === true) {
    minSpecial = functionArray.getSpecialCharacters();
    minLength++;

  }

// empty string variable for the for loop below
    var randomPasswordGenerated = "";

// loop getting random characters
    for (let i = 0; i < (parseInt(passLength) - minLength); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minNum;
  randomPasswordGenerated += minLower;
  randomPasswordGenerated += minUpper;
  randomPasswordGenerated += minSpecial;


  return randomPasswordGenerated;

}




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
