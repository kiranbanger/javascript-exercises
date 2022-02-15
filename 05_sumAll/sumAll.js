const sumAll = function(x, y) {
	
  if (x<0 || y<0 || typeof(x) !== 'number' || typeof(y) !== 'number'){
    return('ERROR')
  }	
  
  if(x>y){
    start = y;
	end = x
  }else{
     start = x;
     end = y;	 
  }
  
  let total = 0;
  
  for (let i = start; i <= end ; i++){
    total += i
  }
  return total
};

// Do not edit below this line
module.exports = sumAll;
