import { combineReducers } from 'redux';

import { default as contacts } from './contact';
import { default as filter }  from './filter';

const reducer = combineReducers({
    contacts,
    filter
});

export default reducer;