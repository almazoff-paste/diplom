import { loggers } from "./util/logger";
import { ConfigManager } from "./util/config";
import { MySQL } from "./database/mysql";
import express from "express";
import path from "node:path";
import { Route } from "./util/route";

loggers.system.info("starting web-server...");
loggers.system.info("loading config...");

export const config = ConfigManager.loadConfig();

loggers.system.info("config loaded!");

export const dir = __dirname;
export const web = express();

async function init() {
    Route.loadRoutes(path.join(dir, "route"), []);

    await MySQL.init();

    web.listen(config.server.port, config.server.hostname, () => {
        loggers.system.info("web-server listen at http://" + config.server.hostname + ":" + config.server.port);
    });
}

init();