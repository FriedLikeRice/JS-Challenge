// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts for password
function generatePassword() {
    var passwordlength = prompt("How many characters?");
    var lowercase = confirm("Do you want lowercase?");
    var uppercase = confirm("Do you want uppercase?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
    //min length of password set to 4 characters
    var minimumlength = 4;
    
    var minNum = "";
    var minUpper = "";
    var minLower = "";
    var minSpecial = "";

    var 