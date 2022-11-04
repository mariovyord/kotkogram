import { createAction, props } from "@ngrx/store";
import { IComment } from "src/app/shared/interfaces/IComment";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[DETAILS]'

export const loadPost = createAction(
    `${namespace} load post`,
    props<{ post: IPost }>(),
)

export const loadComments = createAction(
    `${namespace} load comments`,
    props<{ comments: IComment[] }>(),
)
