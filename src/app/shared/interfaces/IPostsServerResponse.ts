import { IPost } from "./IPost";

export interface IPostsServerResponse {
    code: number,
    message: string,
    data: IPost[] | undefined,
    errors: string[] | undefined,
}
