import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as postsActions from "./actions";

export interface IHomeState {
    profilePosts: IPost[],
}

const initialState: IHomeState = {
    profilePosts: [],
}

export const reducers = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, data) => ({
        ...state,
        profilePosts: [...state.profilePosts, ...data.posts]
    }))
)

