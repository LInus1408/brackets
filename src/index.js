module.exports = function check(str, bracketsConfig) {
  let abc = false;
  while (str.length != 0 && !abc) {
    abc = true;
      for (let check1 of bracketsConfig) {
        let check2 = check1.join('');
        if (str.includes(check2)) {
        str = str.replace(check2, '');
        abc = false;
      }
    }
  } 
  return str.length == false; 
}
