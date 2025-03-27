import { dir, web } from "../app";
import path from "node:path";

web.get('/static/*', (req, res) => {
    const relativePath = req.params[0];
    const filePath = path.join(dir, '../static', relativePath);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(503).end();
        }
    });
});