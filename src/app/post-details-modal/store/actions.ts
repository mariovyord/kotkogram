import { createAction, props } from "@ngrx/store";
import { IComment } from "src/app/shared/interfaces/IComment";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[DETAILS]'

export const loadPost = createAction(
    `${namespace} load post`,
    props<{ post: IPost }>(),
)

export const likePost = createAction(
    `${namespace} like post`,
    props<{ userId: string }>(),
)

export const editPost = createAction(
    `${namespace} edit post`,
    props<{ description: string }>(),
)

export const editComment = createAction(
    `${namespace} edit comment`,
    props<{ _id: string, body: string }>(),
)

export const deleteComment = createAction(
    `${namespace} delete comment`,
    props<{ _id: string }>(),
)

export const loadComments = createAction(
    `${namespace} load comments`,
    props<{ comments: IComment[] }>(),
)

export const addComment = createAction(
    `${namespace} add comment`,
    props<{ comment: IComment }>(),
)


