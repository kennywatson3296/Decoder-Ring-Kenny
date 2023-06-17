// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesarHelper(input, shift){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = ""
  for (i=0; i<input.length; i++){
const char = input[i].toLowerCase()
//checks if its in the alphabet
if (!alphabet.includes(char)) result += input[i]
if (alphabet.includes(char)) {
  //gets the index of the character
  let first = alphabet.indexOf(char)
  //shifts the character
let shifted = first + (shift)
if (shifted < 0) { 
  let trueShift = (alphabet.length + shifted)
  result += alphabet[trueShift]
}
else if (shifted >= alphabet.length) {
  let trueShift = shifted - alphabet.length
  result += alphabet[trueShift]
}else if (shifted < alphabet.length){
  result += alphabet[shifted]
}
}
  }return result
  }


  function caesar(input, shift, encode = true) {
    if (!input) return false
    if (shift == 0 || shift > 25 || shift < -25) return false
    if (encode == true) return caesarHelper(input, shift)
    if (encode == false) return caesarHelper(input, -(shift))
  }

  return {
    caesar,
  };
})();

module.exports = {caesar: caesarModule.caesar, caesarHelper: caesarModule.caesarHelper}