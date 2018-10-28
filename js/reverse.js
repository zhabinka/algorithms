const arr = [1,2,3,4,5]

const reverse = arr => {
  const [a, ...rest] = arr;
  return rest.length === 0 ? [a] : [...reverse(rest), a];
}

const reverse2 = arr => arr.reduce((acc, el) => [el, ...acc], []);

console.log(reverse(arr));
console.log(reverse2(arr));