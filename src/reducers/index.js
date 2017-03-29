import { combineReducers } from 'redux';

import { default as contacts } from './contacts';
import { default as filterValue }  from './filter';

const reducer = combineReducers({
    contacts,
    filterValue
});

export default reducer;