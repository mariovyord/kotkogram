import { createFeature, createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as feedActions from "./feed.actions";

export interface IFeedState {
    feedPosts: IPost[],
    loading: boolean,
}

const initialState: IFeedState = {
    feedPosts: [],
    loading: false,
}

export const feedFeature = createFeature(
    {
        name: 'feed',
        reducer: createReducer(
            initialState,
            on(feedActions.loadPosts, (state) => ({
                ...state,
                loading: true
            })),
            on(feedActions.loadPostsSuccess, (state, data) => ({
                ...state,
                feedPosts: [...state.feedPosts, ...data.posts],
                loading: false
            })),
            on(feedActions.loadPostsCancel, (state) => ({
                ...state,
                loading: false
            })),
            on(feedActions.loadPostsFailure, (state) => ({
                ...state,
                loading: false
            })),
        )
    }
)

export const {
    name, // feature name
    reducer, // feature reducer
    selectFeedPosts, // feature selector
    selectFeedState, // selector for `books` property
    selectLoading, // selector for `loading` property
} = feedFeature;


