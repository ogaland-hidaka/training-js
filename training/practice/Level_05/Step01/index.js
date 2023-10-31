/**
 * キャラクターの作成を行う
 * @param {String} name
 * @param {Number} level
 * @param {String} job
 * @param {Number} hp
 * @param {Number} mp
 * @param {Number} power
 * @param {Number} intelligence
 * @returns
 */
const makeCharacter = (name, level, job, hp, mp, power, intelligence) => {
    return {
        name: name,
        level: level,
        job: job,
        hp: hp,
        mp: mp,
        power: power,
        intelligence: intelligence
    }
}

// 勇者パーティーのオブジェクトを生成
const bravePartyObj = [];
bravePartyObj.push(makeCharacter('タルーノ', 50, '戦士', 160, 10, 250, 3));
bravePartyObj.push(makeCharacter('ようーこ', 1, 'ヒーラー', 5, 100, 1, 1));
bravePartyObj.push(makeCharacter('ケンター', 30, 'バーサーカー', 500, 0, 555, 1));

console.log(bravePartyObj);