import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

export const selectHomeState = (state: { home: { allPosts: IPost[] } }) => state.home;

export const selectAllPosts = createSelector(
    selectHomeState,
    (state: { allPosts: IPost[] }) => state.allPosts
)
