function isNice(arr){
  if(arr.length === 0) return false;
  for(let i in arr) {
    if(arr.indexOf(arr[i] - 1) === -1 && arr.indexOf(arr[i] + 1) === -1) return false;
  }
  return true;
}