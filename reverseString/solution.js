function solution(str){
  let newStr = '';
  for (let i = str.length -1; i > -1; i--) {
    newStr = `${newStr}${str[i]}`;
  }
  return newStr;
}