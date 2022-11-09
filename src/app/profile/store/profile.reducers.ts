import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";
import * as postsActions from "./profile.actions";

export interface IProfileState {
    profilePosts: IPost[],
    userPostsCount: number,
    activatedUser: IUser | null,
}

const initialState: IProfileState = {
    profilePosts: [],
    userPostsCount: 0,
    activatedUser: null,
}

export const profileReducers = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, payload) => ({
        ...state,
        profilePosts: [...state.profilePosts, ...payload.posts]
    })),
    on(postsActions.loadPostsCount, (state, payload) => ({
        ...state,
        userPostsCount: payload.count,
    })),
    on(postsActions.loadActivatedUser, (state, payload) => ({
        ...state,
        activatedUser: payload.user,
    })),
    on(postsActions.resetWithNewData, (state, payload) => ({
        ...state,
        profilePosts: [...payload.posts],
        loading: false
    })),
)

