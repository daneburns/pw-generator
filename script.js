var specialCharacters = ["!", "?", "$", "#", "@", "&"]
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var finalPw = []
function myFunction() {
  var element = document.getElementById("passwordCriteria");
  element.classList.remove("invisible");
  var element2 = document.getElementById("generatePassword");
  element2.classList.add("disabled");
}

function myFunction2() {
  var element2 = document.getElementById("generatePassword");
  element2.classList.add("disabled");
}

var criteria = [];

document.getElementById("submit").addEventListener("click", function(e) {
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    criteria.push(checkboxes[i].name);
    console.log(criteria);
  }
  var passwordResult = {
    special: false,
    numbers: false,
    lowercase: false,
    uppercase: false,
    pwLength: 0,
  };
  if (criteria.includes("special")) {
    passwordResult.special = true;
  }
  if (criteria.includes("numbers")) {
    passwordResult.numbers = true;
  }
  if (criteria.includes("lowercase")) {
    passwordResult.lowercase = true;
  }
  if (criteria.includes("uppercase")) {
    passwordResult.uppercase = true;
  }
  
  var integerValue = parseInt(document.getElementById("integerInput").value);
  passwordResult.pwLength = integerValue
  console.log(passwordResult);

  console.log(typeof(passwordResult.pwLength))

  for (let i = 0; i < passwordResult.pwLength; i++) {

     if(passwordResult.special === true) {
      finalPw.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
      
    }
    if(passwordResult.numbers === true) {
      finalPw.push(numericArray[Math.floor(Math.random() * numericArray.length)])
     
    }
    if(passwordResult.uppercase === true) {
      finalPw.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)])
     
    }
    if(passwordResult.lowercase === true) {
      finalPw.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)])
      
    }
  }

  function truncate(str, length) {

  }
    
  var pwString = finalPw.join().replace(/,/g, '')
  var pwShorten = pwString.slice(0, passwordResult.pwLength)
  console.log(pwShorten)
    var field = document.getElementById('exampleFormControlTextarea1')
    field.innerText = pwShorten
});

function myFunction3() {
  var element2 = document.getElementById("submit");
  element2.classList.add("invisible");
  var element = document.getElementById("passwordCriteria")
  element.classList.add("invisible")
}
