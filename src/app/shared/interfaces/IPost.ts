import { IUser } from "./IUser";

export interface IPost {
    _id: string,
    imageUrl: string,
    description: string,
    owner: IUser,
    likes: string[],
    createdAt: string,
    updatedAt: string,
}
