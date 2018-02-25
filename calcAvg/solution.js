function find_average(array) {
  let ans = array.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue) / array.length;
  } ,0);
  return Math.ceil10(ans, 1);
}