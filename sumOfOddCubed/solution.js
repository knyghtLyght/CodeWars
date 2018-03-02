function cubeOdd(arr) {
  console.log(arr);
  for(let i in arr) {
    if(!(/\d/.test(arr[i]))) {
      return undefined;
    }
  }
  return arr
    .map(element => Math.pow(element, 3))
    .filter(element => element % 2 === 1 || element % 2 === -1)
    .reduce((acc, curr) => acc + curr, 0);
}