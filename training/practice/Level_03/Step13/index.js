const fruits = ["りんご", "ブドウ", "バナナ"];
const fruits2 = ["バナナ", "キウイ", "パイナポー"];
const joinArray = fruits.concat(fruits2);
let duplicationVal = joinArray.filter((fruit, index, array) => {
    // 先頭から見つけた位置と、末尾から見つけた位置が同じであれば配列に格納
    return array.indexOf(fruit) === array.lastIndexOf(fruit);
});
console.log(duplicationVal);