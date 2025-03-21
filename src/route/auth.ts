import { web } from "../app";
import { UserRepository } from "../repository/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Template } from "../util/template";

const privateKey = "SECRET_KEY";

web.use((req, res, next) => {
    // get cookie from headers and check jwt session
    if (req.cookies.Session == undefined) {
        res.redirect('/auth');
        return;
    }

    const decoded = jwt.verify(req.cookies.Session, privateKey);
    console.log(decoded);

    next();
});

web.post("/auth", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserRepository.findByEmail(email);
    if (user == undefined) {
        res.send("error: user not found");
        return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        res.send("error: bad password");
        return;
    }

    const authData = {email: email};
    const session = jwt.sign(authData, privateKey);

    res.cookie("Session", session);
    res.send("success");
});

web.get("/auth", function (req, res) {
    res.send(
        Template.render("auth", {})
    );
});