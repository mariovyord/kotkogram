import { IComment } from "./IComment";

export interface IOneCommentServerResponse {
    code: number,
    message: string,
    data: IComment | undefined,
    errors: string[] | undefined,
}
