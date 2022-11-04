import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import { IUser } from "src/app/shared/interfaces/IUser";

const namespace = '[PROFILE]'

export const loadPosts = createAction(
    `${namespace} load posts`,
    props<{ posts: IPost[] }>(),
)

export const loadPostsCount = createAction(
    `${namespace} load number of posts`,
    props<{ count: number }>(),
)

export const loadActivatedUser = createAction(
    `${namespace} load user data`,
    props<{ user: IUser }>(),
)

