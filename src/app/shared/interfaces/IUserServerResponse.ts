import { IUser } from "src/app/shared/interfaces/IUser";

export interface IUserServerResponse {
    code: number,
    message: string,
    data: IUser | undefined,
    errors: string[] | undefined,
}
