export type Config = {
    server: {
        hostname: string
        port: number
    }
    database: {
        type: string
        sqlite: {
            filename: string
        }
        mysql: {
            username: string
            password: string
            database: string
            hostname: string
            pool: number
        }
    }
}