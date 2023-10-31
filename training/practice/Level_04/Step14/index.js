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

/**
 * 対象配列に検索対象のキーが存在するかチェックを行う
 * @param {Object} obj 検索対象配列
 * @param {String} key 検索対象キー
 * @returns 存在する：true   存在しない：false
 */
const isExistKey = (obj, key) => {
    return key in obj ? true : false;
};

console.log('envsのチェック: ' + isExistKey(skillEnvObj, 'envs'));
console.log('userのチェック: ' + isExistKey(skillEnvObj, 'user'));