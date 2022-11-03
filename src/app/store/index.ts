import { ActionReducerMap } from "@ngrx/store";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

export interface IGlobalState {
    readonly user: any;
    readonly posts: any,
}

export const reducers: ActionReducerMap<IGlobalState> = {
    user: userReducer,
    posts: postsReducer,
}
