// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // takes the decryption table and makes it into an array of objects with the number value according to the letter
const decryptionConstant = [
  {letter: "a", num: 11}, {letter: "b", num: 21}, {letter: "c", num: 31}, {letter: "d", num: 41}, {letter: "e", num: 51},
  {letter: "f", num: 12}, {letter: "g", num: 22}, {letter: "h", num: 32}, {letter: "i", num: 42}, {letter: "j", num: 42}, {letter: "k", num: 52},
  {letter: "l", num: 13}, {letter: "m", num: 23}, {letter: "n", num: 33}, {letter: "o", num: 43}, {letter: "p", num: 53},
  {letter: "q", num: 14}, {letter: "r", num: 24}, {letter: "s", num: 34}, {letter: "t", num: 44}, {letter: "u", num: 54},
  {letter: "v", num: 15}, {letter: "w", num: 25}, {letter: "x", num: 35}, {letter: "y", num: 45}, {letter: "z", num: 55},
]
  function polybius(input, encode = true) {
   let result = ""
   //encoding
   if (encode == true) {
    //loops through the characters in the input
    for (let char in input) {
      //checks if the value is a space, if so adds a space in the result
      if (input[char] == " ") {result += " "}
      //if the index isn't a space, finds the corresponding letter in the objects and replaces with the number corresponding
      else {
       let first = decryptionConstant.find((element) => element.letter == input[char].toLowerCase())
       result += first.num
      }}
    }

//decoding
    if (encode == false){
      //tests if there is an odd number of numbers in the message removing whitespaces
      let test = input.split(' ').join('')
      let testNum = test.length
      if (testNum % 2 != 0)  return false

      for (i=0; i<input.length; i++){
        //checks if the value at index is a space, if so adds a space to the result
        if (input[i] == " ") {result += " "}
        //if it isn't a space finds the corresponding letters to the set of numbers
        else{
          //gets the two digits to match the number value in the objects in the constant
        let number = input[i]+ input[i+1]
        //if the number is 42 returns the value (i/j)
        if (number == 42) result += "(i/j)"
        //else it returns the letter corresponding to the number
        else if (number > 10 && number != 42) {
          let first = decryptionConstant.find((element) => element.num == number)
          result += first.letter
          //increases the integer value in order to remain true to the decoder, ignores if the value includes a space
        } i+=1
      }
     
     }}
   return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
