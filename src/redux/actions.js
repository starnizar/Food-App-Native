import {CHANGE_INDEX} from './types';


export function changeIndex(index) {
    return{
        type: CHANGE_INDEX,
        payload: index
    }
}
