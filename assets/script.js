// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add characters array
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbersUsed = ['0','1','2','3','4','5','6','7','8','9'];


function generatePassword() {
  console.log(lowerCase, upperCase, numbersUsed);
  let newpass = [];
  const characterCandidates = [];
  const numberOfChar = +prompt("What is the number of character you would like to use? (Between 8 and 128 please)");
  if (numberOfChar < 8) {
    console.log("Too few characters. Password must be between 8 and 128 characters long.");
    alert("Too few characters. Password must be between 8 and 128 characters long.");
    return
  } else if (numberOfChar > 128) {
    console.log("Too many characters. Password must be between 8 and 128 characters long.");
    alert("Too many characters. Password must be between 8 and 128 characters long.");
    return;
  } else {
    alert("Password will be " + numberOfChar + " characters long.");
  }
  console.log(numberOfChar);

  //Lower case letters in password

  let lower = confirm("Would you like to include LOWER CASE letters in your password (yes/no)");
  if (lower) {
    characterCandidates.push(...lowerCase);
    console.log(characterCandidates);
  } else if (!lower) {
    console.log("Lower case letters not included");
  }

  //Upper case letters in password

  let upper = confirm("Would you like to include UPPER CASE letters in your password (yes/no)");
  if (upper) {
    characterCandidates.push(...upperCase);
    console.log(characterCandidates);
  } else if (!upper) {
    console.log("Upper case letters not included");
  } else {
    alert("Please select a letter casing");
    return;
  }

//Numbers in password

  let numbers = confirm("Would you like to include numbers in your password (yes/cancel)");
  if (numbers) {
    characterCandidates.push(...numbersUsed);
    console.log(characterCandidates);
  } else if (!numbers) {
    console.log("numbers not included");
  }

  //Feedback for if there is no letter or numbers

  if (!lower && !upper && !numbers) {
    alert("You don't have any characters to use in your password!");
    return;
  }

  for (let i = 0; i < numberOfChar; i++) {
    let index = Math.floor(Math.random() * characterCandidates.length)
    newpass.push(characterCandidates[index])
  }

  return newpass.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
