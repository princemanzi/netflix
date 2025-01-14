const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Your database user
    host: 'localhost', // Database host
    database: 'users', // Your database name
    password: 'password', // Your database password
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;
