// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  let name = '';
  do{
  name += s;
  n--;
  } while(n > 0)
  return name;
  console.log(name);
}
