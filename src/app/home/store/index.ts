import { ActionReducerMap } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { postsReducer } from "./reducers";

export interface IState {
    readonly posts: IPost[];
}

export const reducers: ActionReducerMap<IState> = {
    posts: postsReducer,
}
