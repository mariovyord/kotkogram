import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[FEED]'

export const loadPosts = createAction(
    `${namespace} load feed posts`,
)

export const loadPostsSuccess = createAction(
    `${namespace} load feed posts success`,
    props<{ posts: IPost[] }>(),
)

export const loadPostsFailure = createAction(
    `${namespace} load feed posts failure`,
)

export const loadPostsCancel = createAction(
    `${namespace} load feed posts cancel`,
)

export const resetWithNewData = createAction(
    `${namespace} reset feed posts with new data`,
    props<{ posts: IPost[] }>(),
)
