function filter_list(list) {
  console.log(list);
  return list.filter(element => /\d/.test(element));
}