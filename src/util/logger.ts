class Logger {
    private static date: Date = new Date();

    private readonly title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public info(message: string): void {
        console.log(this.format("INFO", message));
    }

    public format(level: string, message: string): string {
        return `( ${Logger.time()} ) ( ${level} ) [${this.title}]: ${message}`;
    }

    public static time() {
        this.date.setTime(Date.now());

        const year = this.date.getFullYear();
        const month = String(this.date.getMonth() + 1).padStart(2, '0');
        const day = String(this.date.getDate()).padStart(2, '0');
        const hours = String(this.date.getHours()).padStart(2, '0');
        const minutes = String(this.date.getMinutes()).padStart(2, '0');
        const seconds = String(this.date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}

export const loggers = {
    system: new Logger("system"),
    route: new Logger("route"),
};