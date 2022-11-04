import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

export const selectPostsState = (state: { posts: { profilePosts: IPost[] } }) => state.posts;

export const selectProfilePosts = createSelector(
    selectPostsState,
    (state: { profilePosts: IPost[] }) => state.profilePosts
)
