import { myNameStr, favoriteFruitAray } from "./common.js";

/** 文章生成 */
let consoleMsg = myNameStr + "が好きな食べ物は\n";
favoriteFruitAray.forEach((value, index) => {
    consoleMsg += (index + 1) + "つ目は、" + value + "です。";
});
console.log(consoleMsg);