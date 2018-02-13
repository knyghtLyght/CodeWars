function solve(arr){
  for(var i in arr) {
    if(!arr.includes(-i)) {
      return i;
    }
  }
}