import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact, editContact } from '../actions';
import FormContact from '../components/FormContact';

const mapStateToProps = state => ({
    contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
    addContact: bindActionCreators(addContact, dispatch),
    editContact: bindActionCreators(editContact, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);