import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, INIT_CONTACTS } from '../actions';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case INIT_CONTACTS:
            const contacts = action.dataConts;
            return [...state, ...contacts];

        case DELETE_CONTACT:
            const index = state.findIndex(contact => contact.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case ADD_CONTACT:
            const contId = state.length;
            const contact = {
                id: contId,
                name: action.name,
                surname: action.surname,
                birthdayDate: action.birthdayDate,
                mail: {
                    persone: action.mail.persone,
                    work: action.mail.work,
                },
                phone: {
                    mobile: action.phone.mobile,
                    work: action.phone.work
                }
            }
            return [...state, contact];

        case EDIT_CONTACT:
            return state.map(contact => {
                if (contact.id != action.id) {
                    return contact;
                }

                return Object.assign({}, contact, {
                    name: action.name,
                    surname: action.surname,
                    birthdayDate: action.birthdayDate,
                    mail: {
                        persone: action.mail.persone,
                        work: action.mail.work,
                    },
                    phone: {
                        mobile: action.phone.mobile,
                        work: action.phone.work
                    }
                });
            });

        default:
            return state;
    }
}

export default reducer;