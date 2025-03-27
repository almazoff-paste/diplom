import { web } from "../app";
import { UserRepository } from "../repository/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Template } from "../util/template";

const privateKey = "SECRET_KEY";

type Session = {
    email: string;
}

web.use((req, res, next) => {
    // get cookie from headers and check jwt session
    if (req.cookies == undefined || req.cookies.Session == undefined) {
        if (req.url != "/auth") {
            res.redirect('/auth');
        } else {
            next();
        }

        return;
    }

    const decoded = jwt.verify(req.cookies.Session, privateKey) as Session;
    res.locals.session = decoded.email;

    next();
});

web.post('/auth', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserRepository.findByEmail(email);
    if (user == undefined) {
        res.send(
            Template.render("auth", {error: "Пользователь не существует!"})
        );
        return;
    }

    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
        res.send(
            Template.render("auth", {error: "Неверный пароль!"})
        );
        return;
    }

    const authData: Session = {email: email};
    const session = jwt.sign(authData, privateKey);

    res.cookie("Session", session);
    res.redirect('/profile');
});

web.get('/auth', function (req, res) {
    res.send(
        Template.render("auth", {})
    );
});