import mysql from 'mysql2/promise';
import { config } from "../app";
import { loggers } from "../util/logger";

export class MySQL {
    private static connection: mysql.Connection;

    public static async init() {
        try {
            this.connection = await mysql.createConnection({
                host: config.database.mysql.hostname,
                user: config.database.mysql.username,
                database: config.database.mysql.database,
                password: config.database.mysql.password
            });
        } catch (e) {
            loggers.system.error(e);
        }
    }

    public static async query(sql: string, ...args: any[]): Promise<any> {
        const [results] = await this.connection.query(sql, args);
        return results;
    }

    public static async execute(sql: string, ...args: any[]): Promise<void> {
        await this.connection.execute(sql, args);
    }
}
