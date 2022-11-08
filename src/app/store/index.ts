import { ActionReducerMap } from "@ngrx/store";
import { IUserState, userReducer } from "./user.reducer";

export interface IGlobalState {
    readonly user: IUserState;
}

export const reducers: ActionReducerMap<IGlobalState> = {
    user: userReducer,
}
