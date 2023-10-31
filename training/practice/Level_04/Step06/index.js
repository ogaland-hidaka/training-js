const skillList = {
    id: 1,
    name: '日高梨沙',
    skills: [
        {
            id: 1,
            name: 'HTML',
            experience: 10
        },
        {
            id: 2,
            name: 'CSS',
            experience: 10
        },
        {
            id: 3,
            name: 'javascript',
            experience: 10
        },
        {
            id: 4,
            name: 'php',
            experience: 3
        },
        {
            id: 5,
            name: 'docker',
            experience: 2
        }
    ]
};

// 期待結果生成
console.log('-------- skillsプロパティ -------------');
let skills = skillList.skills;
console.log(skills);
console.log('-------- id が3のプロパティを抽出 -------------');
let skillObj = skills.filter((skill) => skill.id === 3); // idが3のレコードを抽出
console.log(skillObj);