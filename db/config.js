//Mi configuración para conectarme a la base de datos

const { Pool } = require("pg");

const pool = new Pool({

    user: "vteatzjgbmhrhw",
    host: "ec2-44-193-111-218.compute-1.amazonaws.com",
    database: "d685kdc3c7ofuc",
    password: "2812d7ddcfcfa6eadde641602561b5dcfc0c8a284dcc7b76310ba6123d9c67cf",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

module.exports = pool;