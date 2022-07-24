const sum = (...nums) => {
  return nums.reduce((a,b) => a + b);
}

const numArray = [1,2,3,4,5];

console.log(sum(...numArray));