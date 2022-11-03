import { createReducer, on } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as postsActions from "./actions";

const initialState: IPost[] = [];

export const postsReducer = createReducer(
    initialState,
    on(postsActions.loadPosts, (state, data) => [...state, ...data.posts])
)

