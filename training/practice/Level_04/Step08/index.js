const skillObj = {
    id: 1,
    name: 'HTML',
    rank: 'A',
    getSkillFlag: 0
};

delete skillObj.rank; // rankプロパティを削除
console.log(skillObj);