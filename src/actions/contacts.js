export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const INIT_CONTACTS = 'INIT_CONTACTS';
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';

export const initContacts = () => ({
    type: INIT_CONTACTS
});

export const updateContacts = () => ({
    type: UPDATE_CONTACTS
});

export const addContact = (name, surname, birthdayDate, mailPersone, mailWork, phoneMobile, phoneWork) => ({
    type: ADD_CONTACT,
    name,
    surname,
    birthdayDate,
    mail: {
        persone: mailPersone,
        work: mailWork,
    },
    phone: {
        mobile: phoneMobile,
        work: phoneWork
    }
});

export const deleteContact = id => ({
    type: DELETE_CONTACT,
    id
});

export const editContact = (id, name, surname, birthdayDate, mailPersone, mailWork, phoneMobile, phonWork) => ({
    type: EDIT_CONTACT,
    id,
    name,
    surname,
    birthdayDate,
    mail: {
        persone: mailPersone,
        work: mailWork,
    },
    phone: {
        mobile: phoneMobile,
        work: phonWork
    }
});