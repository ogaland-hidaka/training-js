/**
 * 引数で渡った誕生日より、現在からの差分を返す
 * @param {String} birthday 誕生日
 * @returns 誕生日までの日数差分
 */
const birthdayDiff = (birthday) => {
    let today = new Date(); // 現在日
    let nowYear = today.getFullYear();
    // 正確な日数を出すため、時分秒は0に統一（誕生日が0になってるので）
    let formatTodya = new Date(nowYear, today.getMonth(), today.getDate(), 0, 0, 0);
    // 誕生日を年月日にフォーマット（時分秒は0）
    let birthdayYmd = new Date(nowYear, String(birthday).slice(0, 2) - 1, String(birthday).slice(2, 4));

    // 差分日数を取得
    let diffTime = birthdayYmd.getTime() - formatTodya.getTime();
    let diffDay = Math.floor(Math.abs(diffTime) / 86400000);

    
    if (diffTime < 0) {
        // 誕生日が現在より過去の場合、過去の文章を返す
        return "あなたの誕生日から「" + diffDay + "」日経過しました。。。";
    } else if (diffTime == 0) {
        // 当日の場合、おめでとうメッセージを返す
        return "お誕生日おめでとうございます！";
    }
    // 現在の文章を返す
    return "あなたの誕生日まであと・・・「" + diffDay + "」日です！";
}

/**
 * main処理
 */
function main() {
    let termDay = birthdayDiff("1028");
    console.log(termDay);
}

// main処理実行
main();