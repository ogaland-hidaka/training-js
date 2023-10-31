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
console.log(skillEnvObj);