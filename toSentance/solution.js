function formatWords(words){
  if (words === null || words.length === 0) {
    return '';
  }
  for (let i = 0; i < words.length; i++) {
    if(words[i] === '') {
      words.splice(i, 1);
      i--;
    }
  }
  if (words.length === 0) return '';
  if (words.length === 1) {
    return words[0];
  }
  let ansStr = words[0];
  for (let i = 1 ; i < words.length - 1; i++) {
    ansStr = `${ansStr}, ${words[i]}`;
  }
  ansStr = `${ansStr} and ${words[words.length - 1]}`;
  return ansStr;
}