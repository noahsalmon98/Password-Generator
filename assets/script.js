// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add characters array
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];


function generatePassword (){
  let newpass = [];
  const numberOfChar = +prompt("What is the number of character you would like to use? (Between 8 and 128 please)");
  if (numberOfChar < 8) {
    console.log("Too few characters. Password must be more between 8 and 128 characters long.");
    alert("Too few characters. Password must be more between 8 and 128 characters long.");
    return
  } else if (numberOfChar > 128) {
    console.log("Too many characters. Password must be more between 8 and 128 characters long.");
    alert("Too many characters. Password must be more between 8 and 128 characters long.");
    return
  } else {
    alert("Password will be "+ numberOfChar +" characters long.");
  }
console.log(numberOfChar)

//Lower case letters in password

let Lower =confirm("Would you like to include LOWER CASE letters in your password (yes/no)");
if (Lower) {
  const randomLow= Math.floor(Math.random() * 26)
  newpass.push(lowerCase[randomLow]);
  const word=[];
  var small = word.concat(lowerCase);
}
else if (!Lower) {
  console.log("Lower case letters not included")
}

//Upper case letters in password
let Upper =confirm("Would you like to include UPPER CASE letters in your password (yes/no)");
if (Upper) {
  const randomUp= Math.floor(Math.random() * 26)
  newpass.push(upperCase[randomUp]);
  var big =small.concat(upperCase);
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
