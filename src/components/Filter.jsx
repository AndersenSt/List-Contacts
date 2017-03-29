import React from 'react';

import Search from 'material-ui/svg-icons/Action/search';
import { cyan500 } from 'material-ui/styles/colors';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const filterValue = this.refs.search.value.toLowerCase();
        this.props.filterContacts(filterValue);
    }

    render() {
        return (
            <div className='filter'>
                <input
                    type='search'
                    ref='search'
                    className='filter-input'
                    placeholder='Search contact by name...'
                    onChange={this.handleChange}
                />
                <Search color={cyan500} />
            </div>
        );
    }
}

export default Filter;