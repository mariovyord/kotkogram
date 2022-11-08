// console.log all actions
import { ActionReducer, MetaReducer } from '@ngrx/store';
import * as userActions from './user.actions';
import * as detailsActions from '../post-details-modal/store/details.actions';
import { IPost } from '../shared/interfaces/IPost';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('state', state);
        return reducer(state, action);
    };
}

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        if (action.type === userActions.clearUser.type) {
            state = undefined;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [];
