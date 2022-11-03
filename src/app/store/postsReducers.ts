import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as postsActions from "./actions";

interface IPostsState {
    all: IPost[]
}

const initialState: IPostsState = {
    all: [],
}

export const postsReducers = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, data) => ({
        ...state,
        all: [...state.all, ...data.posts]
    }))
)

