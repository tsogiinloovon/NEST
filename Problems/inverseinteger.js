

var reverse = function (x) {
  let isNeg = x<0 ? true:false;
  if(isNeg) x=x*-1;
  
  let reversed = 0;

  while (x > 0) {
    reversed=reversed*10+Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  if(reversed > 2**31){
    return 0;
    }
  return isNeg?reversed*-1:reversed;
};


console.log("aa:",reverse(123))