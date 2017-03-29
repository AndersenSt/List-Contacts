import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterContacts } from '../actions';

import Filter from '../components/Filter';

const mapDispatchToProps = dispatch => ({
    filterContacts: bindActionCreators(filterContacts, dispatch)
});

export default connect(null, mapDispatchToProps)(Filter);