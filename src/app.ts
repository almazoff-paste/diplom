import { loggers } from "./util/logger";
import { ConfigManager } from "./config/config-manager";
import express from "express";
import { loadRoutes } from "./util/route";
import path from "node:path";

loggers.system.info("loading config...");

export const config = ConfigManager.loadConfig();

loggers.system.info("config loaded!");

export const web = express();

loadRoutes(path.join(__dirname, "route"))

web.listen(config.server.port, config.server.hostname, () => {
    loggers.system.info("web server listen at http://" + config.server.hostname + ":" + config.server.port);
});