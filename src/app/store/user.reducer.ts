import { createReducer, on } from "@ngrx/store";
import { IUser } from "../shared/interfaces/IUser";
import * as userActions from "./user.actions";

export interface IUserState {
    user: IUser | null | undefined,
    isAuth: boolean,
}

const initialState: IUserState = {
    user: undefined,
    isAuth: false,
}

export const userReducer = createReducer(
    initialState,
    on(userActions.loadUserSuccess, (state, payload) => ({
        ...state,
        user: payload,
        isAuth: true,
    })),
    on(userActions.loadUserFailure, (state) => ({
        ...state,
        user: null,
        isAuth: false,
    })),
    on(userActions.setUser, (state, data) => ({
        ...state,
        user: data,
        isAuth: true,
    })),
    on(userActions.clearUser, (state) => ({
        ...state,
        user: null,
        isAuth: false,
    })),
    on(userActions.followUser, (state, { followId }) => {
        if (state.user) {
            const following = [...state.user.following]

            const userIndex = following.indexOf(followId)

            if (userIndex === -1) {
                following.push(followId)
            } else {
                following.splice(userIndex, 1);
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...following],
                },
            }
        } else {
            return state;
        }
    }),
)


