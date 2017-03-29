import { FILTER_CONTACTS } from '../actions';

const reducer = (state = "", action = {}) => {
    switch (action.type) {
        case 'FILTER_CONTACTS':
            return action.filterValue

        default:
            return state;
    };
}

export default reducer;

