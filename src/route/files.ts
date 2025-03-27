import { web } from "../app";
import { Template } from "../util/template";
import multer from "multer";
import { FileRepository } from "../repository/file-repository";
import fs from "fs";

const upload = multer({dest: 'uploads'});

web.get('/files', async function (req, res) {
    const files = await FileRepository.getAll();

    res.send(
        Template.render("files", { files: files })
    );
});

web.get('/files/add', function (req, res) {
    res.send(
        Template.render("files_add", {})
    );
});

web.post('/files/add', upload.single("file"), async function (req, res) {
    const tempFile = req.file.path;

    const result = await FileRepository.insert({
        filename: req.body.filename,
        edited_at: Math.floor(new Date().getTime() / 1000)
    });

    fs.renameSync(tempFile, "uploads/" + result.id);
    res.redirect('/files');
});