import sqlite3 from 'sqlite3'
import path from "node:path";
import { dir } from "../app";

export function create() {
    return new sqlite3.Database(path.join(dir, "../database.db"));
}