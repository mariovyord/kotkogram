import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";

const namespace = '[PROFILE]'

export const loadPosts = createAction(
    `${namespace} load profile posts`,
    props<{ activatedUserId: string }>(),
)

export const loadPostsSuccess = createAction(
    `${namespace} load profile posts success`,
    props<{ posts: IPost[] }>(),
)

export const loadPostsFailure = createAction(
    `${namespace} load profile posts failure`,
)

export const loadPostsCancel = createAction(
    `${namespace} load profileposts cancel`,
)

export const loadPostsCount = createAction(
    `${namespace} load profile number of posts`,
    props<{ count: number }>(),
)

export const loadActivatedUser = createAction(
    `${namespace} load profile user data`,
    props<{ user: IUser }>(),
)

export const resetWithNewData = createAction(
    `${namespace} reset profile posts with new data`,
    props<{ posts: IPost[] }>(),
)

