const repeatString = function(str,n) {
  newStr = str;
  
  if(str === '' || n === 0 ){
    newStr = ''
  } else if(n<0) {
	  newStr = 'ERROR';
  } else {
	  while(n>1){
        newStr = newStr.concat(str)
	    --n
      }
  }

  return newStr
};

// Do not edit below this line
module.exports = repeatString;
