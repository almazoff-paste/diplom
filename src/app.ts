import { loggers } from "./util/logger";
import { ConfigManager } from "./config/config-manager";
import express from "express";

loggers.system.info("loading config...");

export const config = ConfigManager.loadConfig();

loggers.system.info("config loaded!");

export const dir = __dirname;
export const web = express();

// loadRoutes();

web.listen(config.server.port, config.server.hostname, () => {
    loggers.system.info("web server listen at http://" + config.server.hostname + ":" + config.server.port);
});