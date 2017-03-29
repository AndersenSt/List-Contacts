import React from 'react';

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
                        onDelete={this.props.deleteContact}
                    />)
                }
            </div>
        );
    };
}

export default ListContacts;