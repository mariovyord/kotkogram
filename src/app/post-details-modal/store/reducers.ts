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
    })),
    on(detailsActions.likePost, (state, data) => {
        const id = data.userId;
        const editedPost = Object.assign({}, state.post);
        console.log('pre', editedPost);

        if (editedPost.likes.includes(id)) {
            editedPost.likes = editedPost.likes.filter(like => like !== id);
        } else {
            editedPost.likes = [...editedPost.likes, id];
        }
        console.log('post', editedPost);
        return {
            ...state,
            post: editedPost,
        }
    }),
)

