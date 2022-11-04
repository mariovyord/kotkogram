import { createAction, props } from "@ngrx/store";
import { IPost } from "src/app/shared/interfaces/IPost";

const namespace = '[FEED]'

export const loadPosts = createAction(
    `${namespace} load feed posts`,
    props<{ posts: IPost[] }>(),
)
