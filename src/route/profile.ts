import { web } from "../app";
import { Template } from "../util/template";
import { UserRepository } from "../repository/user-repository";

web.get('/profile', async function (req, res) {
    const email = res.locals.session;
    const profile = await UserRepository.findByEmail(email);

    res.send(
        Template.render("profile", profile)
    );
});