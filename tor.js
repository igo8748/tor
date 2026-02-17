 "PidTor": {
        "enable": true,
        "redapi": "http://redapi.cfhttp.top",
        "apikey": "",
        "displayname": "🇺🇦 TorOnline",
        "displayindex": 5,
        "min_sid": 5,
        "max_size": 0,
        "max_serial_size": 0,
        "sort": "sid",
        "filter": "UKR",
        "filter_ignore": "Telesync|TS-AVC|Camrip",
        "base_auth": {
            "enable": true,
            "login": "*****",
            "passwd": "*****"
        },
        "torrs": [
            "http://**.***.***.***:8090",
            "http://**.***.***.***:8090/ts"
        ],
        "auth_torrs": [
            {
                "enable": true,
                "host": "http://**.***.***.***:8090",
                "login": "*****",
                "passwd": "*****"
            },
            {
                "enable": true,
                "host": "http://ip:9118/ts",
                "login": "{account_email}",
                "passwd": "ts"
            }
        ]
    }
