import { web } from "../app";

web.get('/', function (req, res) {
    res.render('layout', { body: '<%- include("index") %>', title: "Главная" });
});