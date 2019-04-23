/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  return new Set(words.map(word => {
    return word2MorseCode(word);
  })).size;
};

var word2MorseCode = function(word) {
  return word
    .split('')
    .map(c => codes[c.charCodeAt() - 'a'.charCodeAt()])
    .join('');
};

const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];