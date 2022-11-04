import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[ALL POSTS]'

export const loadPosts = createAction(
    `${namespace} load posts`,
    props<{ posts: IPost[] }>(),
)