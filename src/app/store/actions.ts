import { createAction, props } from "@ngrx/store";
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

export const clearUser = createAction(
    `${namespace} load user clear`
)
