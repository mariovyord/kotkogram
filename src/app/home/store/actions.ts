import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[ALL POSTS]'

export const loadPosts = createAction(
    `${namespace} load posts`,
)

export const loadPostsSuccess = createAction(
    `${namespace} load posts success`,
    props<{ posts: IPost[] }>(),
)

export const loadPostsFailure = createAction(
    `${namespace} load posts failure`,
)

export const loadPostsCancel = createAction(
    `${namespace} load posts cancel`,
)
