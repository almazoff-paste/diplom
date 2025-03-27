import { MySQL } from "../database/mysql";

export type User = {
    id: number;
    email: string;
    role: string;
    password: string;
};

export class UserRepository {
    public static async findByEmail(email: string): Promise<User> {
        return await MySQL.query("SELECT * FROM users WHERE email = ?", email);
    }
}