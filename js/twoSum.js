const twoSum = (nums, target, arr = nums) => {
// const obj = nums.reduce((acc, el, i) => ({ ...acc, [i]: el }), {});
// const obj = { ...nums };
// const obj = Object.assign({}, nums);

    const [first, ...rest] = nums;
    const second = rest.filter(el => el + first === target);
  
    if (second.length !== 0) {
      return [arr.indexOf(first), arr.lastIndexOf(second[0])];
    }
    
    return twoSum(rest, target, arr);  
};

const twoSumIter = (nums, target) => {
  const iter = (arr) => {
    const [first, ...rest] = arr;
    const second = rest.filter(el => el + first === target);
  
    if (second.length !== 0) {
      return [nums.indexOf(first), nums.lastIndexOf(second[0])];
    }
    
    return iter(rest);  
  };

  return iter(nums);  
};

const arr = [4,9,5,6,7,111,9];
const num = 18;
twoSum(arr, num);