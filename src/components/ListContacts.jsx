import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions';

import Contact from './Contact';
import Subheader from 'material-ui/Subheader';

class ListContacts extends React.Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <div>
                <Subheader>Contacts</Subheader>
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        surname={contact.surname}
                        mailPersone={contact.mail.persone}
                        mailWork={contact.mail.work}
                        phoneMobile={contact.phone.mobile}
                        phonWork={contact.phone.work}
                        birthdayDate={contact.birthdayDate}
                        onDelete={this.props.onDelete}
                    />)
                }
            </div>
        );
    };
}

const mapStateToProps = state => ({
    contacts: state
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);