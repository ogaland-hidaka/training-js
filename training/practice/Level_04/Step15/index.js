const emptyObj = {};
const simpleObj = {
    id: 1,
    name: "JON",
};

/**
 * 指定したオブジェクトが空であるかチェックを行う
 * @param {Object} obj 検索対象配列
 * @returns 空オブジェクト：true   空でないオブジェクト：false
 */
const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0 ? true : false;
};

console.log('空オブジェクトを渡した際の結果: ' + isEmptyObj(emptyObj));
console.log('空でないオブジェクトを渡した際の結果: ' + isEmptyObj(simpleObj));