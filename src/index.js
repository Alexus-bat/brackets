module.exports = function check(str, bracketsConfig) {
  let config = [],
      strNew = str;
  for (let elem of bracketsConfig) {
    config.push(elem[0] + elem[1]);
  }
  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < config.length; j++) {
      strNew = strNew.replace(config[j], '');      
    }
    if (strNew.length == 0) return true;   
  }
  return false;  
}
