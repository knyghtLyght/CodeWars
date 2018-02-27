function cubeOdd(arr) {
  return arr.map(element => Math.pow(element, 3)).filter(element => element % 2 === 1).reduce((acc, curr) => acc + curr, 0);
}