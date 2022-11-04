import { createSelector } from "@ngrx/store";
import { IGlobalState } from ".";
import { IUserState } from "./userReducer";

export const selectUserState = (state: IGlobalState) => state.user;

export const selectUser = createSelector(
    selectUserState,
    (state: IUserState) => state.user,
)

export const selectIsAuth = createSelector(
    selectUserState,
    (state: IUserState) => state.isAuth,
)


