const fruits = ["りんご", "ブドウ", "バナナ"];
const fruits2 = ["バナナ", "キウイ", "パイナポー"];
const joinArray = fruits.concat(fruits2);
let duplicationVal = joinArray.filter((fruit) => {
    return fruits.includes(fruit) && fruits2.includes(fruit)
});
// このままだとduplicationValはバナナが重複するので、重複しない値にする
console.log([...new Set(duplicationVal)]);