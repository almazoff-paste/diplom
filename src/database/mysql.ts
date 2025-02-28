import mysql from 'mysql2/promise';

async function create() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test',
    });
}