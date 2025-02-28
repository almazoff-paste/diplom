import * as fs from 'fs';
import * as path from 'path';

export function loadRoutes(dir: string, routes: string[]) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            loadRoutes(filePath, routes);
        } else if (file.endsWith('.js')) {
            const modulePath = filePath.replace(/\\/g, '/');
            const module = require(modulePath);
            routes.push(module);
        }
    }
}