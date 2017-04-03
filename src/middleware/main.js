import { INIT_CONTACTS, UPDATE_CONTACTS } from '../actions';

const middleware = store => next => action => {
    switch (action.type) {
        case INIT_CONTACTS:
            let dataConts = JSON.parse(localStorage.getItem("contacts"));
            dataConts = dataConts ? dataConts : [];
            return next({
                ...action,
                dataConts
            });

        case UPDATE_CONTACTS:
            const currentState = store.getState().contacts;
            localStorage.setItem("contacts", JSON.stringify(currentState));

        default: return next({ ...action });
    }
}

export default middleware;