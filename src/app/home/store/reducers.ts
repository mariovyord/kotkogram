import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as postsActions from "./actions";

export interface IHomeState {
    allPosts: IPost[],
}

const initialState: IHomeState = {
    allPosts: [],
}

export const reducers = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, data) => ({
        ...state,
        allPosts: [...state.allPosts, ...data.posts]
    }))
)

