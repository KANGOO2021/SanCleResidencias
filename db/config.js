//Mi configuración para conectarme a la base de datos

const { Pool } = require("pg");

const pool = new Pool({

    user: "gbgkydsgowsavk",
    host: "ec2-3-211-6-217.compute-1.amazonaws.com",
    database: "d481j12l1025sm",
    password: "7a6a26446483370d36073c4ce3ba8a118438615f5a5b48c7fc08ed38521cd372",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

module.exports = pool;