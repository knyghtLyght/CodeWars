function mutateMyStrings(stringOne, stringTwo){
  let ansString = stringOne;
  console.log(stringOne);
  for(let i in stringOne) {
    if(stringOne[i] !== stringTwo[i]) {
      stringOne = stringOne.split('');
      stringOne[i] = stringTwo[i];
      stringOne = stringOne.join('');
      ansString = `${ansString}\n${stringOne}`;
    }
  }
  return ansString + '\n';
}