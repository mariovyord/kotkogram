import { createFeature, createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as postsActions from "./actions";

export interface IHomeState {
    allPosts: IPost[],
    loading: boolean,
}

const initialState: IHomeState = {
    allPosts: [],
    loading: false,
}

export const homeFeature = createFeature(
    {
        name: 'home',
        reducer: createReducer(
            initialState,
            on(postsActions.loadPosts, (state) => ({
                ...state,
                loading: true
            })),
            on(postsActions.loadPostsSuccess, (state, data) => ({
                ...state,
                allPosts: [...state.allPosts, ...data.posts]
            })),
            on(postsActions.loadPostsCancel, (state) => ({
                ...state,
                loading: false
            })),
            on(postsActions.loadPostsFailure, (state) => ({
                ...state,
                loading: false
            })),
        )
    }
)

export const {
    name, // feature name
    reducer, // feature reducer
    selectHomeState, // feature selector
    selectAllPosts, // selector for `books` property
    selectLoading, // selector for `loading` property
} = homeFeature;

