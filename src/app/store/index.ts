import { ActionReducerMap } from "@ngrx/store";
import { IUserState, userReducer } from "./userReducer";

export interface IGlobalState {
    readonly user: IUserState;
}

export const reducers: ActionReducerMap<IGlobalState> = {
    user: userReducer,
}
