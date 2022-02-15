const ftoc = function(f) {
  let temp = ((f-32)*(5/9));
  
  let dec = temp - Math.floor(temp);//decimal part of temp
  let roundingValue = (dec*10) - Math.floor(dec*10) //extract the value that decides whether to round the first decimal up or down
  
  if( roundingValue < 0.50){
    temp = Math.floor(temp) + (Math.floor(dec*10))/10
  }else{
     temp = Math.floor(temp) + (Math.ceil(dec * 10.0))/10
  }
  return temp
};

const ctof = function(c) {
  let temp = (c*(9/5) + 32)
  
  let dec = temp - Math.floor(temp);
  let roundingValue = (dec*10) - Math.floor(dec*10)
  
  if( roundingValue < 0.50){
    temp = Math.floor(temp) + (Math.floor(dec*10))/10
  }else{
     temp = Math.floor(temp) + (Math.ceil(dec * 10.0))/10
  }
  return temp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
