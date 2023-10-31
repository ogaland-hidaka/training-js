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
    ],
    server: {
        id: 1,
        name: 'OSSサーバー',
        ip: '192.168.11.10'
    }
};

skillEnvObj.envs[0].dns_server = 'docker-dns';
console.log('-------- プロパティ追加後 -------------');
console.log(skillEnvObj);
console.log('');
console.log('-------- プロパティ削除後 -------------');
delete skillEnvObj.envs[0].dns_server;
console.log(skillEnvObj);
