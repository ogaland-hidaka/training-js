/**
 * 自分の名前を返す
 * @returns 自分の名前
 */
const getMyName = function () {
    return "日高梨沙";
}

/**
 * 自分の所属部署を返す
 * @returns 自分の所属部署
 */
const getDepartment = function () {
    return "システム開発部";
}

/**
 * 自分の趣味を返す
 * @returns 自分の趣味
 */
const getHobby = function () {
    return "「読書・アニメ鑑賞・カラオケ・ドライブ」";
}

/**
 * main処理
 */
function main() {
    let name = getMyName();           // 名前
    let department = getDepartment(); // 所属部署
    let hobby = getHobby();           // 趣味

    // 自己紹介文を作成
    let selfInfo = "私の名前は" + name + "です。\n";
    selfInfo += department + "に所属しています。\n";
    selfInfo += "趣味は" + hobby + "です。";

    console.log(selfInfo);
}

// main処理実行
main();