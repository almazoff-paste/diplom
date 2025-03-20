import { web } from "../app";
import { UserRepository } from "../repository/user-repository";
import bcrypt from "bcrypt";

web.use((req, res, next) => {
    // get cookie from headers and check jwt session
    next();
});

web.post("/auth", async function (req, res) {
    let email;
    let password;

    let user = await UserRepository.findByEmail(email);
    if (user == undefined) {
        // not exist user
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        // not verify password
    }

    // success auth
});

web.get("/auth", function (req, res) {
    // page
});