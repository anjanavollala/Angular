import { Status } from "../app.constants";

export interface Assessment {
    college: string,
    app: string,
    date: Date,
    status: Status,
    travel: URL,
    saf: URL
}