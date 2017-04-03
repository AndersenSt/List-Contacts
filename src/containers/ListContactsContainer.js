import { connect } from 'react-redux';
import { deleteContact, updateContacts } from '../actions';
import { bindActionCreators } from 'redux';

import ListContacts from '../components/ListContacts';

const getFilterContacts = (contacts, filterValue) => {
    const contArray = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterValue);
    });
    return contArray;
}

const mapStateToProps = state => ({
    contacts: getFilterContacts(state.contacts, state.filterValue),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: bindActionCreators(deleteContact, dispatch),
    updateContacts: bindActionCreators(updateContacts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);