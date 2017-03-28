export const FILTER_CONTACTS = "FILTER_CONTACTS";

export const filterContacts = filterValue => ({
    type: FILTER_CONTACTS,
    filterValue
});