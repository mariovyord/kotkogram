import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";

export const selectPostsState = (state: { profile: { profilePosts: IPost[], userPostsCount: number, activatedUser: IUser } }) => state.profile;

export const selectProfilePosts = createSelector(
    selectPostsState,
    (state: { profilePosts: IPost[] }) => state.profilePosts
)

export const selectPostsCount = createSelector(
    selectPostsState,
    (state: { profilePosts: IPost[], userPostsCount: number }) => state.userPostsCount,
)

export const selectActivatedUser = createSelector(
    selectPostsState,
    (state: { profilePosts: IPost[], userPostsCount: number, activatedUser: IUser }) => state.activatedUser,
)
