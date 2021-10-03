/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

    if(x>2**31)
        return false;
    if(x<10){
        console.log('here')
        return true;
    }    
    let temp = x;
    let reversed = 0;
    
    while (x > 0) {
    reversed=reversed*10+Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
    if(temp == reversed){
       return true;
       }
    else return false;
};

console.log('isPalindrome:',isPalindrome(0))