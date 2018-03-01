module.exports = function check(str, bracketsConfig) {
  let result = false;
  const open = bracketsConfig[0][0];
  const close = bracketsConfig[0][1];
  let brackets = str.split('');
  let configLength = bracketsConfig.length;
  function checkBrackets(){
    if(brackets.length === 0){
      console.log('result!!!!!!!!', result);
      return result = true;
    };
    console.log('bracketsLength', brackets.length, 'result', result);
    const indexCloseBracket = brackets.indexOf(close);
    const indexOpenBracket = brackets.indexOf(open);
    if ((indexCloseBracket === -1 && indexOpenBracket > -1) || (indexCloseBracket > -1 && indexOpenBracket === -1) ){
      console.log('indexCloseBracket === -1 || indexOpenBracket === -1');
      return result = false;
    }
    if(indexCloseBracket > 0){
      for(let i =  indexCloseBracket - 1; i > -1; ){
        console.log('brackets', brackets, 'цикл пошел','i', i,'indexCloseBracket', indexCloseBracket, 'indexOpenBracket', indexOpenBracket);
        if(brackets[i] === open){
          console.log('brackets', brackets, 'зашли в цикл','i', i,'indexCloseBracket', indexCloseBracket, 'indexOpenBracket', indexOpenBracket)
          brackets.splice(indexCloseBracket,1);
          brackets.splice(i,1);    
          console.log('brackets.length', brackets.length, 'brackets', brackets, 'конец цикла','i', i,'indexCloseBracket', indexCloseBracket, 'indexOpenBracket', indexOpenBracket)    
          checkBrackets();
        } else 
        if( i = 0){
          return result = false
        } else { i--; }
    }} else { return result = false; };
  };
  checkBrackets();
  console.log( result);
  console.log("!!!!!!!!!!!!!!!!!!!!!!", result);
  return result;
}; 
