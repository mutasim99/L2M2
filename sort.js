const number = [4, 6, 8, 5, 100, 2, 58, 1];

const fruits = ['Banana', 'Cherry', 'apple', 'dates']

// number.sort((a, b) => a - b);

// console.log(number);

fruits.sort((a,b)=>a.localeCompare(b));

console.log(fruits);