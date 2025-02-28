import fs from "fs";
import YAML from "yaml";
import { Config } from "./config";

export class ConfigManager {
    static loadConfig(): Config {
        const fileConfig = fs.readFileSync('./config.yml', 'utf-8');
        return YAML.parse(fileConfig) as Config;
    }
}