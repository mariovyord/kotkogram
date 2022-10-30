import { IPost } from "./IPost";

export interface IOnePostServerResponse {
    code: number,
    message: string,
    data: IPost | undefined,
    errors: string[] | undefined,
}
