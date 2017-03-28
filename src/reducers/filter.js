import { FILTER_CONTACTS } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {
        case FILTER_CONTACTS:
            return state;

        default:
            return state;
    }
}

export default reducer;