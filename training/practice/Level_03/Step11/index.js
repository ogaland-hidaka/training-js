const fruits = ["りんご", "ブドウ", "バナナ", "りんご"];
let duplicationVal = new Set(fruits);
// Arrayに格納
console.log([...new Set(fruits)]);