import { MySQL } from "../database/mysql";

export type File = {
    id?: number;
    filename: string;
    edited_at: number;
};

export class FileRepository {
    public static async getAll(): Promise<File[]> {
        return await MySQL.queryAll("SELECT * FROM files", {});
    }

    public static async insert(file: File): Promise<File> {
        const data = await MySQL.queryAll("INSERT INTO files (filename, edited_at) VALUES (?, ?)", file.filename, file.edited_at);

        file.id = data.insertId;

        return file;
    }
}