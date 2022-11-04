import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";
import * as postsActions from "./actions";

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

export const reducers = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, data) => ({
        ...state,
        profilePosts: [...state.profilePosts, ...data.posts]
    })),
    on(postsActions.loadPostsCount, (state, data) => ({
        ...state,
        userPostsCount: data.count,
    })),
    on(postsActions.loadActivatedUser, (state, data) => ({
        ...state,
        activatedUser: data.user,
    }))
)

