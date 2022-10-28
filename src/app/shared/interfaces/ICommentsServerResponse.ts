import { IComment } from "./IComment";

export interface ICommentsServerResponse {
    code: number,
    message: string,
    data: IComment[] | undefined,
    errors: string[] | undefined,
}
