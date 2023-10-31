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

skillEnvObj.server = {
    id: 1,
    name: 'OSSサーバー',
    ip: '192.168.11.10'
};

console.log(skillEnvObj);