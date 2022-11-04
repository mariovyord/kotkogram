import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as feedActions from "./actions";

export interface IFeedState {
    feedPosts: IPost[],
}

const initialState: IFeedState = {
    feedPosts: [],
}

export const reducers = createReducer(
    initialState,
    on(feedActions.loadPosts, (state, data) => ({
        ...state,
        feedPosts: [...state.feedPosts, ...data.posts]
    }))
)

