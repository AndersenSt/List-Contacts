import React from 'react';
import { connect } from 'react-redux';

import { filterContacts } from '../actions';
import Search from 'material-ui/svg-icons/Action/search';
import { cyan500 } from 'material-ui/styles/colors';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // const value = event.target.value.toLowerCase();
        // this.setState({
        //     filterValue: value
        // });
        // const filterValue = this.state.filterValue;

        // this.props.onfilterContacts(filterValue)
    }

    render() {
        return (
            <div className='filter'>
                <input
                    type='search'
                    className='filter-input'
                    placeholder='Search contact by name...'
                    value={this.state.filterValue}
                />
                <Search color={cyan500} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFilterContacts: filterValue => dispatch(filterContacts(filterValue))
});

export default connect(null, mapDispatchToProps)(Filter);