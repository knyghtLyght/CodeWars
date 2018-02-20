function isNice(arr){
  let flag = true;
  arr.forEach(element => {
    for(let i in arr) {
      if(!(element + 1 === arr[i]) && !(element - 1 === arr[i])) flag = false;
    }
  });
  return flag;
}