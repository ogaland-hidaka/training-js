/**
 * 引数で渡った配列値の合計値を返す
 * @param {Array} args 計算対象の配列
 * @returns 数値である場合は合計値、数値でない場合はエラー内容
 */
const totalSum = (args) => {
    let sum = 0;
    args.forEach(element => {
        sum += element;
    });
    return sum;
}

/**
 * main処理
 */
function main() {
    let sum = totalSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log("合計値：" + sum);
}

// main処理実行
main();