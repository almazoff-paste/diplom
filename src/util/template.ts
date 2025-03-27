import ejs, { Data } from "ejs";
import fs from "fs";
import { dir } from "../app";
import path from "node:path";

export class Template {
    public static render(filename: string, data: Data) {
        const pageFile = fs.readFileSync(
            path.join(dir, "../template/" + filename + ".ejs"), "utf8"
        );

        const layoutFile = fs.readFileSync(
            path.join(dir, "../template/layout.ejs"), "utf8"
        );

        const page = ejs.render(pageFile, data);
        const layout = ejs.render(layoutFile, {body: page, title: "test"});

        return layout;
    }
}

export const template: Template = new Template();

