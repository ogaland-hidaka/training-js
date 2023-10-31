const skillEnvObj = {
    id: 1,
    name: 'HTML',
    rank: 'A',
    envs: [
        {
            web_server: 'nginx',
            app_server: 'php-fmp',
            db_server: 'mariadb'
        }
    ]
};

let consoleStr = 'envプロパティの長さは、' + skillEnvObj.envs.length + 'です。';
console.log(consoleStr);

// カンマ区切りの文章を生成
let keyStr = '';
let keyObj = Object.keys(skillEnvObj.envs[0]);
keyObj.forEach((val, index) => {
    keyStr += val + '、';
});
keyStr = keyStr.slice(0, -1);
let consoleStr2 = 'オブジェクトのkey名は' + keyStr + 'です。';
console.log(consoleStr2);