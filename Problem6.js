// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];
// console.log(arr);

const filtered = arr.filter((arr) => arr.part==="fe");
// console.log(filtered);

const sorted = filtered.sort((a,b) => b.age-a.age);
// console.log(sorted);

const upper = sorted.map(arr =>({...arr, part:arr.part.toUpperCase()}));
console.log(upper);