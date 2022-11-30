// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password object.
var pwCri = {
    //Property for length of password
    pwLen: 0,

    //arrays to hold lower/uppercase letters, numbers, special characters
    

    pwUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],

    pwLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],

    pwNum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

    pwChar: [ '"', '!', '#', '$', '%', '&', "'", "(", ")", "*", "+", ",", "-", ".", "/", 
    '\\', '=', ';', ':', '>', '<', '?', '@', "[", "]", "^", "_", "`", "{", "}", "|", "~",] 
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
    var special;
    var pwLength = 0;
    var numbers;
//this var will be what holds the password that is generated and brought back from the call
var re = "";

    pwLength = 0;
    pwCri.pwLen = 0;
    re = "";

    while (pwLength < 8 || pwLength > 128) {
        pwLength = prompt ("Choose how many characters you wanna use \n Its gotta be inbetween 1-128 characters.");
                //if statement for when the user clicks cancel
        if (pwLength === null) {
            return "No password, womp womp";
        }
        else {
            //this will check if our user picks a number
            if(!isFinite(pwLength)) {
                alert("Gotta pick a number!!");
                return "womp womp womp";
            }
            else {
                //this is the will be checking if the length meets our pwrd cri
                if(pwLength < 8 || pwLength > 128) {
                    alert("You scrambled password has to be within 8 -128 characters");
                    return "womp womp womp"
                }
                else {
                    //this is the call to our function to display within the prompts to the user for our criteria
                    showMethewindow();

                    //this keeps adding characters based on our criteria till the length is - to the length the user chose
                    while(pwCri.pwLen < pwLength) {
                        if(upper === false && lower === false && special === false && numbers === false) {
                            alert ("You gotta choose 1 upper, lower case letter a number and some special characters");
                            showMethewindow();
                        }
                        else {
                            //in the event the user selects either uppercase, lowercase, special characters, or a number and there is room to add characters then
                            //randomly grabs uppercase, lowercase letters, special characters or numbers from the array(s) above and will add it to the end of our results, updating pwdLength by 1

                            if (special === true && pwCri.pwLen <  pwLength){
                                var spechar = pwCri.pwChar[Math.floor(Math.random()* 36)]
                                re = re + spechar;
                                pwCri.pwLen++;


                            }

                            if (upper === true && pwCri.pwLen <  pwLength){
                                var up = pwCri.pwLower[Math.floor(Math.random()* 26)]
                                re= re + up;
                                pwCri.pwLen++;
                            }

                            if (lower === true && pwCri.pwLen <  pwLength){
                                var low = pwCri.pwUpper[Math.floor(Math.random()* 26)]
                                re = re + low;
                                pwCri.pwLen++;


                            }

                            if (numbers === true && pwCri.pwLen <  pwLength){
                                var nums = pwCri.pwNum[Math.floor(Math.random()* 10)]
                                re = re + nums;
                                pwCri.pwLen++;


                            }

                            

                        }
                    }
                }
            }
        }
        //returns the generated password back to the function that is being called
        return re;

        // function prompts the user regarding for password criteria needed
        function showMethewindow() {
            
            lower = confirm("Are we using Lower case?");
            upper = confirm("Are we using Upper case?");
            
            special = confirm("Are we using special characters?");
            numbers = confirm("Are we using numbers?");
        }
    }
}
