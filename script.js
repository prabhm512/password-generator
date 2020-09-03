// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters array
    var specialCharacters = [
        '@',
        '%',
        '+',
        '\\',
        '/',
        "'",
        '!',
        '#',
        '$',
        '^',
        '?',
        ':',
        ',',
        ')',
        '(',
        '}',
        '{',
        ']',
        '[',
        '~',
        '-',
        '_',
        '.'
    ];

// Numeric character array
      var numericCharacters = [
            '0', 
            '1', 
            '2', 
            '3', 
            '4', 
            '5', 
            '6', 
            '7', 
            '8', 
            '9'
          ];
// Lower cased characters array 
        var lowerCasedCharacters = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z'
        ];

//Upper cased characters array
        var upperCasedCharacters = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
 

// Updates output value each time slider is dragged
var rangeslider = document.getElementById("inputRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

// Updates the current slider value (each time you drag the slider handle)

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

function generatePassword() {
    var specialChar = document.getElementById("Symbols-specialChar").checked;
    var numChar = document.getElementById("Symbols-numChar").checked;
    var lowerChar = document.getElementById("Symbols-lowerChar").checked;
    var upperChar = document.getElementById("Symbols-upperChar").checked;
  
    var newArr = [];

        for (k=0; k<output.innerHTML; k++) {

            // Pushes special characters into a new array if user has checked that option
            if (specialChar) {
                newArr.push(specialCharacters[Math.ceil(Math.random()*specialCharacters.length-1)]);
            }
            
            // Pushes numeric characters into a new array if user has checked that option
            if (numChar) {
                newArr.push(numericCharacters[Math.ceil(Math.random()*numericCharacters.length-1)]);
            }
            
            // Pushes lower cased characters into a new array if user has checked that option
            if (lowerChar) {
                newArr.push(lowerCasedCharacters[Math.ceil(Math.random()*lowerCasedCharacters.length-1)]); 
            }

            // Pushes upper cased characters into a new array if user has checked that option
            if (upperChar) {
                newArr.push(upperCasedCharacters[Math.ceil(Math.random()*upperCasedCharacters.length-1)]);
            }

            // Alerts user when no check boxes have been ticked.
            if (!specialChar && !numChar && !lowerChar && !upperChar) {
                return "No checkbox ticked...";
            }
        }

        // After the new array has been formed from the options the user checked, it has more a few characters than what the user asked for
        // Reduces size of array to equal requested password length
        for (i=0; i=((newArr.length)-output.innerHTML); i++) {
        newArr.splice(Math.round(Math.random()*newArr.length), 1);
        }
        
        // joins the spliced array and returns it
        return newArr.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prints joint 'new array' onto screen on clicking the generate button
generateBtn.addEventListener("click", writePassword);

