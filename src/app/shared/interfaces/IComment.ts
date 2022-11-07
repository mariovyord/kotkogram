import { IUser } from "./IUser";

export interface IComment {
    _id: string,
    body: string,
    owner: IUser,
    post: string,
    isOwner?: boolean,
}

