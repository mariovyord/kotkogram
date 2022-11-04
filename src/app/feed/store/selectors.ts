import { createSelector } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

export const selectFeedState = (state: { feed: { feedPosts: IPost[] } }) => state.feed;

export const selectFeedPosts = createSelector(
    selectFeedState,
    (state: { feedPosts: IPost[] }) => state.feedPosts
)
