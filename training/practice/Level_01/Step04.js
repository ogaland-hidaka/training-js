/**
 * 指定した日付を年月日にフォーマットしてコンソールに表示する
 * @param {Date} date フォーマット対象日付
 */
function formatFullDatetimeJp(date) {
    let year = date.getFullYear();
    let month = String('0' + (date.getMonth() + 1)).slice(-2);
    let day = String('0' + date.getDate()).slice(-2);
    let ymd = year + "年" + month + "月" + day + "日";
    console.log(ymd);
}

/**
 * main処理
 */
function main() {
    let today = new Date();
    formatFullDatetimeJp(today);
}

// main処理実行
main();