module.exports = function check(str, bracketsConfig) {
  let result = false;
  let configLength = bracketsConfig.length;
  for(let i = 0; i < configLength ; i++){
    bracketsConfig[i] =  ''+bracketsConfig[i][0] + bracketsConfig[i][1];
  };
  function lookAndDelete(substr){
    index = str.indexOf(substr);
    str = str.slice(0, index) + str.slice(index + 2, str.length)
  }
  function checkBrackets(){
    let count = 0;
    for(let i = 0; i < configLength ; i++){
      if(str.indexOf(bracketsConfig[i]) > -1){
          count++;
      }
    };
    if (count > 0){
      for(let i = 0; i < configLength ; i++){
        if(str.indexOf(bracketsConfig[i]) > -1){
            lookAndDelete(bracketsConfig[i]);
        }
      };
      checkBrackets();
    }
    else if(str.length > 0){return result = false }
    else {return result = true}
  }
  checkBrackets();
  return result;
}