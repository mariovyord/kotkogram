// console.log all actions
import { ActionReducer, MetaReducer } from '@ngrx/store';
import * as userActions from './user.actions';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('state', state);

        return reducer(state, action);
    };
}

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        if (action.type === userActions.clearUser.type) {
            state.details = undefined;
            state.feed = undefined;
            state.profile = undefined;
            state.user = undefined;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [clearState];
