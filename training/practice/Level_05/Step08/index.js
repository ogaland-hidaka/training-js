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

// ウィザードの追加（バーサーカーの前に）
const wizardChara = makeCharacter('シモーツ', 10, 'ウィザード', 150, 300, 500, 22);
const targetIdx = bravePartyObj.findIndex((member) => member.job == "バーサーカー");
bravePartyObj.splice(targetIdx, 0, wizardChara);

// 5人目のキャラを追加
bravePartyObj.push(makeCharacter('ユウナ', 77, 'ウィザード', 500, 300, 100, 100));

// 昇順でソート
const sortCharaArray = bravePartyObj.sort((party, nextParty) => {
    return party.level - nextParty.level;
});

const partyObjLength = Object.keys(sortCharaArray).length; // 全体の長さを取得
const halfLevelIndex = Math.floor(partyObjLength / 2);     // ソートした半分がレベル半分とみなす
const haleLevelChara = sortCharaArray[halfLevelIndex];     // 中間レベルのメンバーを抽出
console.log(haleLevelChara);
console.log('このパーティーで中間レベルのメンバーは、' + haleLevelChara.name + 'です。');