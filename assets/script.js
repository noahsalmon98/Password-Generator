// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add characters array
const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']


function generatePassword (){
  let unpassword = []
  const numberOfChar = +prompt("What is the number of character you would like to use? (Between 8 and 128 please)")
  if (numberOfChar < 8) {
    console.log("Too few characters. Password must be more between 8 and 128 characters long.")
    alert("Too few characters. Password must be more between 8 and 128 characters long.")
  } else if (numberOfChar > 128) {
    console.log("Too many characters. Password must be more between 8 and 128 characters long.")
    alert("Too many characters. Password must be more between 8 and 128 characters long.")
  } else {
    alert("Password will be "+ numberOfChar +" characters long.")
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
