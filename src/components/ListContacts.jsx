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
                        contact={contact}
                        onDelete={this.props.deleteContact}
                        onUpdate={this.props.updateContacts}
                    />)
                }
            </div>
        );
    };
}

export default ListContacts;