function capitalize(s){
  let sArray = s.split('');
  let evenArray = [];
  let oddArray = [];
  sArray.forEach((element, index) => {
    index % 2 === 0 ? evenArray.push(element.toUpperCase()) : evenArray.push(element);
  });
  sArray.forEach((element, index) => {
    index % 2 === 1 ? oddArray.push(element.toUpperCase()) : oddArray.push(element);
  });
  return [evenArray.join(''), oddArray.join('')];
}