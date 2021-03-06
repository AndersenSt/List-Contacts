import React from 'react';
import { hashHistory } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FilterContainer from '../containers/FilterContainer';
import ShowBirthday from './ShowBirthday';
import ShowBirthdayContainer from '../containers/ShowBirthdayContainer';

class Header extends React.Component {
    createContact() {
        hashHistory.push('/add-contact');
    }

    render() {
        return (
            <header className='header'>
                <FilterContainer />
                <ShowBirthdayContainer />
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