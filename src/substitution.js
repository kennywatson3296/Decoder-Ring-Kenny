// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //checks if there is an alphabet
    if (!alphabet) return false
    //checks if the alphabet has the correct number of unique characters
    if (alphabet.length < 26 || alphabet.length > 26) return false
    //checks if the alphabet contains unique characters
    const test = []
    for (let i in alphabet) {
      const char = alphabet[i]
      for (k=i+1; k<alphabet.length; k++) {
        if (alphabet[k] == char) { test.push(true)}
      }} 
    if (test[0] == true) return false
    // alphabet constant for decoding/ encoding
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    //encode
    if (encode == true){
      for (i=0; i<input.length; i++){
        if (input[i] == " ") result += " "
       else if (input[i]) {
        let char = input[i].toLowerCase()
       num = alpha.indexOf(char)
        result += alphabet[num]
      }
    } return result}
    //decode
    if (encode == false) {
      
      for (let i in input){
        if (input[i] == " ") result += " "
        else if (input[i]) {
          let char = input[i].toLowerCase()
          num = alphabet.indexOf(char)
          result += alpha[num]
        }
      } return result
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
