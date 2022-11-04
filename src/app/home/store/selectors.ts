import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

export const selectPostsState = (state: { home: { allPosts: IPost[] } }) => state.home;

export const selectAllPosts = createSelector(
    selectPostsState,
    (state: { allPosts: IPost[] }) => state.allPosts
)
