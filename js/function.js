const isLengthString=(string, length) => {
  if (string.length<=length) {
    return true;
  }
  return false;
}
const isPalindrom=(string)=> {
  const LowerString=string.toLowerCase();
  let reverce='';
  for (let i=LowerString.length-1;i>=0;i--) {
   reverce+=LowerString.at(i);


  }
  return LowerString===reverce;
}

const exNumber= (string)=> {
  let result='';
  for (let i=0;i<string.length;i++) {
    if (!Number.isNaN(parseInt(string.at(i),10))) {
    result+=string.at(i);

  }
}
return parseInt(result,10)
}
const myPadStart = (string, minLength, pad) => {
  const actualPad=minLength-string.length;
if (actualPad<=0) {
  return string;
}

return pad.slice(0, actualPad% pad.length) + pad.repeat(actualPad/pad.length)+string;

}
