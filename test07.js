// for-of กับ object

let score = {
  midterm : 50,
  final: 30,
  quiz : 20,
  project : 40
};

console.log(score.midterm + score.final + score.quiz + score.project);
console.log('..........');
let total = 0;
for (let key in score) {
  total = total + score[key];
}
console.log(total);
console.log('........');
let total2 = 0;
for (let [key, value] of Object.entries(score)){
  total2 = total2 + value;
}
console.log(total2);