import { createSelector } from "@ngrx/store";
import { IComment } from "src/app/shared/interfaces/IComment";
import { IPost } from "src/app/shared/interfaces/IPost";

export const selectHomeState = (state: { details: { post: IPost, comments: IComment[] } }) => state.details;

export const selectPost = createSelector(
    selectHomeState,
    (state: { post: IPost }) => state.post
)

export const selectAllComments = createSelector(
    selectHomeState,
    (state: { comments: IComment[] }) => state.comments
)

