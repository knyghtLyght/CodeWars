function isNice(arr){
  let flag = false;
  console.log(arr);
  for(let i in arr) {
    arr[i] = parseInt(arr[i]);
    console.log(arr[i]);
    for(let j in arr) {
      if(arr[i] - 1 === arr[j] || arr[i] + 1 === arr[j]) flag = true;
      console.log(arr[i] - 1, arr[i] + 1), arr[j];
    }
  }
  return flag;
}