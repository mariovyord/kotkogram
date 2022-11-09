import { createAction } from "@ngrx/store";

const namespace = '[GLOBAL]'

export const invalidateData = createAction(
    `${namespace} invalidate data`,
)

