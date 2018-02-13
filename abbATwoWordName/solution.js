function abbrevName(name){
  let splitString = name.split(' ');
  return `${splitString[0].charAt(0)}.${splitString[1].charAt(0)}`.toUpperCase();
}