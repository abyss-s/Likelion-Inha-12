// 4번 문제.

let user = {
  name: "지환",
  years: 24,
};

// 아래에 코드를 작성해주세요 ~
let Name = user.name;
let age = user.years;
let isAdmin = user.isAdmin === undefined ? false : isAdmin;

alert(Name); // "지환"
alert(age); // 24
alert(isAdmin); // false
