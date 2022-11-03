import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IState } from ".";

export const selectPostsState = (state: { home: { posts: IPost[] } }) => state.home;

export const selectPostsData = createSelector(
    selectPostsState,
    (state: { posts: IPost[] }) => state.posts
)

