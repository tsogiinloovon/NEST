var romanToInt = function (s) {
  if (s.length < 1 || s.length > 15) return false;
  let symbolarr = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (symbolarr[s[i]] < symbolarr[s[i + 1]] && s[i + 1] != undefined)
      sum -= symbolarr[s[i]];
    else sum += symbolarr[s[i]];
  }
  return sum;
};

console.log("answer:", romanToInt("MCMXCIV")); //1994
console.log("answer:", romanToInt("III"));//3
console.log("answer:", romanToInt("IV"));//4
console.log("answer:", romanToInt("VI"));//6