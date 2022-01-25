//Mi configuración para conectarme a la base de datos

const { Pool } = require("pg");

const pool = new Pool({

    user: "gbmdgyqwueaynm",
    host: "ec2-54-83-137-206.compute-1.amazonaws.com",
    database: "d6fdj165hdplm6",
    password: "ec599e18d57e35ef210b7659075d7e95ddc67e256447b70370364901989085b9",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

module.exports = pool;