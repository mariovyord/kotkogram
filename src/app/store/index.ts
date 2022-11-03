import { ActionReducerMap } from "@ngrx/store";
import { IPost } from "../shared/interfaces/IPost";
import { IUser } from "../shared/interfaces/IUser";
import { postsReducers } from "./postsReducers";
import { IUserState, userReducer } from "./userReducer";

export interface IGlobalState {
    readonly user: IUserState;
    readonly posts: {
        all: IPost[],
    };
}

export const reducers: ActionReducerMap<IGlobalState> = {
    user: userReducer,
    posts: postsReducers,
}
