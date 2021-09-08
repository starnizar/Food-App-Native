import {CHANGE_INDEX} from './types';

const initialState = {
    currentIndex: 0
}

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_INDEX:
            return {...state, currentIndex: action.payload}
        default: return  state
    }
}
