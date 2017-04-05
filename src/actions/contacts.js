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

export const addContact = contact => ({
    type: ADD_CONTACT,
    name: contact.name,
    surname: contact.surname,
    birthdayDate: contact.birthdayDate,
    mail: {
        persone: contact.mail.persone,
        work: contact.mail.work,
    },
    phone: {
        mobile: contact.phone.mobile,
        work: contact.phone.work
    }
});

export const deleteContact = id => ({
    type: DELETE_CONTACT,
    id
});

export const editContact = contact => ({
    type: EDIT_CONTACT,
    id: contact.id,
    name: contact.name,
    surname: contact.surname,
    birthdayDate: contact.birthdayDate,
    mail: {
        persone: contact.mail.persone,
        work: contact.mail.work,
    },
    phone: {
        mobile: contact.phone.mobile,
        work: contact.phone.work
    }
});