const isLengthString = (string, length) => (string.length <= length);
function isPalindrom(string) {
  const lowerString = string.toLowerCase();
  let reverse = '';
  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverse += lowerString.at(i);


  }
  return lowerString === reverse;
}

const extractNumber = (string)=> {
  let result = '';
  for (let i = 0;i < string.length;i++) {
    if (!Number.isNaN(parseInt(string.at(i),10))) {
      result += string.at(i);

    }
  }
  return parseInt(result,10);
};
const lineFilling = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;

};
