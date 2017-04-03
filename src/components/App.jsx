import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initContacts } from '../actions';

class App extends React.Component {
   componentWillMount() {
       this.props.initContacts();
    }

   render() {
       return (
           <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
           </MuiThemeProvider>
       );
   }
}

const mapDispatchToProps = dispatch => ({
    initContacts: bindActionCreators(initContacts, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
