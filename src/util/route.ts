import * as fs from 'fs';
import * as path from 'path';
import { loggers } from "./logger";

export function loadRoutes(dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            loadRoutes(filePath);
        } else if (file.endsWith('.js')) {
            const modulePath = filePath.replace(/\\/g, '/');
            const module = require(modulePath);
            loggers.route.info("loaded route: " + file)
        }
    }
}