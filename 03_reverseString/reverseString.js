const reverseString = function(str) {
	
  let newStr = '';
  const strArray = str.split('');

  while(strArray.length >=1){
    newStr = newStr.concat(strArray.pop())
  }
  return newStr
};

// Do not edit below this line
module.exports = reverseString;
