import { createSelector } from "@ngrx/store";
import { IGlobalState } from ".";
import { IPost } from "../shared/interfaces/IPost";
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

export const selectPostsState = (state: IGlobalState) => state.posts;

export const selectAllPosts = createSelector(
    selectPostsState,
    (state) => state.all
)
