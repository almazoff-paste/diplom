import fs from "fs";
import YAML from "yaml";

export type Config = {
    server: {
        hostname: string
        port: number
    }
    database: {
        mysql: {
            username: string
            password: string
            database: string
            hostname: string
        }
    }
}

export class ConfigManager {
    public static loadConfig(): Config {
        const fileConfig = fs.readFileSync('./config.yml', 'utf-8');
        return YAML.parse(fileConfig) as Config;
    }
}