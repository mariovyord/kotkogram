import { createReducer, on } from "@ngrx/store";
import { IComment } from "src/app/shared/interfaces/IComment";
import { IPost } from "src/app/shared/interfaces/IPost";
import * as detailsActions from "./details.actions";

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
    on(detailsActions.loadPost, (state, payload) => {
        return {
            ...state,
            post: payload.post
        }
    }),
    on(detailsActions.loadComments, (state, payload) => ({
        ...state,
        comments: [...payload.comments]
    })),
    on(detailsActions.editComment, (state, payload) => {
        console.log('state', state)
        const editedComments = state.comments.map(comment => {
            if (comment._id === payload._id) {
                return {
                    ...comment,
                    body: payload.body,
                }
            } else {
                return comment
            }
        })

        return {
            ...state,
            comments: editedComments
        }
    }),
    on(detailsActions.deletePost, () => {
        return Object.assign({}, initialState);
    }),
    on(detailsActions.deleteComment, (state, payload) => {
        const editedComments = state.comments.filter(comment => comment._id !== payload._id)

        return {
            ...state,
            comments: editedComments
        }
    }),
    on(detailsActions.editPost, (state, payload) => {
        const editedPost = Object.assign({}, state.post);
        editedPost.description = payload.description;

        return {
            ...state,
            post: editedPost,
        }
    }),
    on(detailsActions.likePost, (state, payload) => {
        const id = payload.userId;
        const editedPost = Object.assign({}, state.post);

        if (editedPost.likes.includes(id)) {
            editedPost.likes = editedPost.likes.filter(like => like !== id);
        } else {
            editedPost.likes = [...editedPost.likes, id];
        }

        return {
            ...state,
            post: editedPost,
        }
    }),
    on(detailsActions.addComment, (state, payload) => ({
        ...state,
        comments: [payload.comment, ...state.comments]
    })),
)

