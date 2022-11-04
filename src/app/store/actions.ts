import { createAction, props } from "@ngrx/store";
import { IPost } from "../shared/interfaces/IPost";
import { IUser } from "../shared/interfaces/IUser";

const namespace = '[USER]'

export const loadUser = createAction(
    `${namespace} load user`,
)

export const loadUserSuccess = createAction(
    `${namespace} load user success`,
    props<IUser>()
)

export const loadUserFailure = createAction(
    `${namespace} load user failure`,
)

export const loadUserCancel = createAction(
    `${namespace} load user cancel`,
)

export const setUser = createAction(
    `${namespace} set user`,
    props<IUser>(),
)

export const clearUser = createAction(
    `${namespace} clear user`
)

export const followUser = createAction(
    `${namespace} follow/unfollow user`,
    props<{ followId: string }>(),
)

export const loadPosts = createAction(
    `${namespace} load posts`,
    props<{ posts: IPost[] }>(),
)
