import { web } from "../app";
import { Template } from "../util/template";

web.get('/', function (req, res) {
    res.send(
        Template.render("index", {})
    );
});