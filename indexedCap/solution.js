function capitalize(s,arr){
  s = s.split('');
  for(let i in arr) {
    console.log(arr[i]);
    console.log(s[arr[i]]);
    if(arr[i] <= s.length) s[arr[i]] = s[arr[i]].toUpperCase();
    console.log(s);
  }
  return s.join('');
}