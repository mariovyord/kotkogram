import { createReducer, on } from "@ngrx/store";
import { IUser } from "../shared/interfaces/IUser";
import * as userActions from "./actions";

export interface IUserState {
    user: IUser | undefined,
    isAuth: boolean,
}

const initialState: IUserState = {
    user: undefined,
    isAuth: false,
}

export const userReducer = createReducer(
    initialState,
    on(userActions.loadUserSuccess, (state, data) => ({
        ...state,
        user: data,
        isAuth: true,
    })),
    on(userActions.clearUser, () => ({
        user: undefined,
        isAuth: false,
    })),
)


