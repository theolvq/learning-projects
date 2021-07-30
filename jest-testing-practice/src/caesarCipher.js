const alphabet = [
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
  'z',
];

const isLetter = (char) => /\w/.test(char);
const isNotSpace = (char) => /[^\s]/.test(char);
const isNotUnderscore = (char) => /[^_]/.test(char);
const isNotPunctuation = (char) => /[^!?.<>;:'"(){}]/.test(char);
const isValidChar = (char) =>
  isLetter(char) &&
  isNotSpace(char) &&
  isNotUnderscore(char) &&
  isNotPunctuation(char);

const caesar = (str, key) => {
  if (key < 1 || key > 25) {
    return;
  }

  return [...str.toLowerCase()]
    .map((char, i) => {
      const index = alphabet.indexOf(char);
      if (index + key >= 26) {
        return alphabet[26 - index];
      } else if (isValidChar(char)) {
        return alphabet[index + key];
      } else {
        return char;
      }
    })
    .join('');
};

export default caesar;
