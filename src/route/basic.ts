import { web } from "../app";

web.get('/', function (req, res) {
    res.redirect('/profile');
});