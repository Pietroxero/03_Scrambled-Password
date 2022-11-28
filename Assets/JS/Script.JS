// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password object.
var pwdCriteria = {
    //Property for length of password
    pwdLength: 0,

    //arrays to hold lower/uppercase letters, numbers, special characters
    pwdLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",], 

    pwdUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",], 

    pwdNum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 

    pwdChar: [ "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
    "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~",] 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
      // This var sets passwordText to the text area in the HTML that has the ID 'password'

  var passwordText = document.querySelector("#password");

      //this updates the textArea with our new password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this function is to actually generate the password and various conditions.
function generatePassword() {
    //these variables are to obtain information from the user that are displayed in a series of prompts
    var upperCase;
    var lowerCase;
    var specialChar;
    var passwordLength = 0;
    var numbers;
//this var will be what holds the password that is generated and brought back from the call
var result = "";

    passwordLength = 0;
    pwdCriteria.pwdLength = 0;
    result = "";

}