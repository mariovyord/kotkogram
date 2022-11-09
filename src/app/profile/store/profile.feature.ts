import { createFeature, createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";
import * as postsActions from "./profile.actions";

export interface IProfileState {
    profilePosts: IPost[],
    userPostsCount: number,
    activatedUser: IUser | null,
    loading: boolean,
}

const initialState: IProfileState = {
    profilePosts: [],
    userPostsCount: 0,
    activatedUser: null,
    loading: false,
}

export const profileFeature = createFeature(
    {
        name: 'profile',
        reducer: createReducer(
            initialState,
            on(postsActions.loadPosts, (state) => ({
                ...state,
                loading: true
            })),
            on(postsActions.loadPostsSuccess, (state, profile) => ({
                ...state,
                profilePosts: [...state.profilePosts, ...profile.posts],
                loading: false
            })),
            on(postsActions.loadPostsCancel, (state) => ({
                ...state,
                loading: false
            })),
            on(postsActions.loadPostsFailure, (state) => ({
                ...state,
                loading: false
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
    }
)

export const {
    name,
    reducer,
    selectActivatedUser,
    selectProfilePosts,
    selectProfileState,
    selectUserPostsCount,
} = profileFeature;
