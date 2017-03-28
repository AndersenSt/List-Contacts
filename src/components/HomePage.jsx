import React from 'react';

import ListContacts from './ListContacts';
import Header from './Header';
import Paper from 'material-ui/Paper';

class HomePage extends React.Component {
    render() {
        return (
            <Paper className='paper' zDepth={2}>
                <Header />
                <ListContacts />
            </Paper>
        );
    }
}

export default HomePage;