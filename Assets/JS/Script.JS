// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password object.
var pwdCri = {
    //Property for length of password
    pwdLen: 0,

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
    var upper;
    var lower;
    var specialChars;
    var psswrdLength = 0;
    var numbers;
//this var will be what holds the password that is generated and brought back from the call
var res = "";

    psswrdLength = 0;
    pwdCri.pwdLen = 0;
    res = "";

    while (psswrdLength < 8 || psswrdLength > 128) {
        psswrdLength = prompt ("Choose how many characters you wanna use \n Its gotta be inbetween 1-128 characters.");
                //if statement for when the user clicks cancel
        if (psswrdLength === null) {
            return "No password, womp womp";
        }
        else {
            //this will check if our user picks a number
            if(!isFinite(psswrdLength)) {
                alert("Gotta pick a number!!");
                return "womp womp womp";
            }
            else {
                //this is the will be checking if the length meets our pwrd cri
                if(psswrdLength < 8 || psswrdLength > 128) {
                    alert("You scrambled password has to be within 8 -128 characters");
                    return "womp womp womp"
                }
                else {
                    //this is the call to our function to display within the prompts to the user for our criteria
                    showWindow();
                }
            }
        }
    }
}