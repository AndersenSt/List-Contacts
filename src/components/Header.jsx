import React from 'react';
import { hashHistory } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from './Filter';

class Header extends React.Component {
    createContact() {
        hashHistory.push('/add-contact');
    }

    render() {
        return (
            <header className='header'>
                <Filter />
                <FloatingActionButton
                    mini={true}
                    onClick={() => this.createContact()}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </header>
        );
    }
}

export default Header;