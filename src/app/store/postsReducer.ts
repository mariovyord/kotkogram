import { createReducer, on } from "@ngrx/store";
import { IPost } from "../shared/interfaces/IPost";

export interface IUserState {
    posts: IPost[]
}

const initialState: IUserState = {
    posts: [],
}

export const postsReducer = createReducer(
    initialState,

)


