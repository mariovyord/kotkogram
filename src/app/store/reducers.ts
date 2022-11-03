export interface IAppState {
    counter: number
}

const initialState: IAppState = {
    counter: 0,
}

export function appReducer(state: IAppState = initialState, action: any) {
    if (action.type === 'INCREMENT') {
        return { ...state, counter: state.counter + action.payload }
    }
    return state;
}
