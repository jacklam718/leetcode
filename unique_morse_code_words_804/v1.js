/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const uniqueMorseCodes = [];
  for (let word of words) {
    let moseCodes = '';
    for (let letter of word) {
      moseCodes += mapLetter2Morse[letter];
    }
    if (!uniqueMorseCodes.includes(moseCodes)) {
      uniqueMorseCodes.push(moseCodes);
    }
  }
  return uniqueMorseCodes.length;
};

const mapLetter2Morse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
}