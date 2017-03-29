import React from 'react';

import ListContactsContainer from '../containers/ListContactsContainer';
import Header from './Header';
import Paper from 'material-ui/Paper';

class HomePage extends React.Component {
    render() {
        return (
            <Paper className='paper' zDepth={2}>
                <Header />
                <ListContactsContainer />
            </Paper>
        );
    }
}

export default HomePage;