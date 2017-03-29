import { connect } from 'react-redux';
import { deleteContact } from '../actions';
import { bindActionCreators } from 'redux';

import ListContacts from '../components/ListContacts';

function getFilterContacts(contacts, filterValue) {
    const contArray = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterValue);
    });
    return contArray;
}

const mapStateToProps = state => ({
    contacts: getFilterContacts(state.contacts, state.filterValue),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: bindActionCreators(deleteContact, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);