import sqlite3 from 'sqlite3'

export function create() {
    return new sqlite3.Database('/tmp/database.db');
}