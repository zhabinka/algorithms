const qsort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  
  // const support = arr.shift();
  const randomIndex = Math.floor(Math.random() * arr.length);
  const support = arr.splice(randomIndex, 1);

  const low = arr.filter(el => el < support);
  const high = arr.filter(el => el >= support);

  return qsort(low).concat(support, qsort(high));
};