import { createReducer, on } from "@ngrx/store";
import { IComment } from "src/app/shared/interfaces/IComment";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as detailsActions from "./actions";

export interface IDetailsState {
    post: IPost | null,
    comments: IComment[],
}

const initialState: IDetailsState = {
    post: null,
    comments: [],
}

export const reducers = createReducer(
    initialState,
    on(detailsActions.loadPost, (state, data) => {
        return {
            ...state,
            post: data.post
        }
    }),
    on(detailsActions.loadComments, (state, data) => ({
        ...state,
        comments: [...state.comments, ...data.comments]
    }))
)

