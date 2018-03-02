function filter_list(list) {
  console.log(list);
  return list.filter(element => typeof element === 'number');
}