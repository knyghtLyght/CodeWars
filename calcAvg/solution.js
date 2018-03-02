function find_average(array) {
  let ans = array.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue)
  } ,0);
  return ans / array.length;
}