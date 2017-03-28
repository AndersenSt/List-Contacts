import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { addContact, editContact } from '../actions';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class FormContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            phoneMobile: '',
            phoneWork: '',
            mailPersone: '',
            mailWork: '',
            birthdayDate: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.route.type === 'edit') {
            const contacts = this.props.contacts;
            const index = contacts.findIndex(el => el.id == this.props.params.id);
            const contact = contacts[index];
            this.setState({
                name: contact.name,
                surname: contact.surname,
                phoneMobile: contact.phone.mobile,
                phoneWork: contact.phone.work,
                mailPersone: contact.mail.persone,
                mailWork: contact.mail.work,
                birthdayDate: contact.birthdayDate
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.props.params.id;
        const name = this.state.name.toUpperCase();
        const surname = this.state.surname.toUpperCase();
        const phoneMobile = this.state.phoneMobile;
        const phoneWork = this.state.phoneWork;
        const mailPersone = this.state.mailPersone;
        const mailWork = this.state.mailWork;
        const birthdayDate = this.state.birthdayDate;
        if (this.props.route.type === 'add') {
            this.props.onAdd(name,
                surname,
                birthdayDate,
                mailPersone,
                mailWork,
                phoneMobile,
                phoneWork);
        }
        if (this.props.route.type === 'edit') {
            this.props.onEdit(id,
                name,
                surname,
                birthdayDate,
                mailPersone,
                mailWork,
                phoneMobile,
                phoneWork);
        }
        hashHistory.push('/');
    }

    handleChange(event) {
        const name = this.refs.name.value;
        const surname = this.refs.surname.value;
        const phoneMobile = this.refs.phoneMobile.value;
        const phoneWork = this.refs.phoneWork.value;
        const mailPersone = this.refs.mailPersone.value;
        const mailWork = this.refs.mailWork.value;
        const birthdayDate = this.refs.date.value;

        this.setState({
            name,
            surname,
            phoneMobile,
            phoneWork,
            mailPersone,
            mailWork,
            birthdayDate
        });
    }

    handleClick() {
        hashHistory.push('/');
    }

    render() {
        return (
            <Paper className='paper-form' zDepth={2}>
                <form onSubmit={this.handleSubmit}>
                    <label className='label'>
                        Name
                        <span className='star'>*</span>
                    </label>
                    <input type='text'
                        ref='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                        className='form-input'
                        required
                    />
                    <label className='label'>Surname</label>
                    <input type='text'
                        ref='surname'
                        value={this.state.surname}
                        onChange={this.handleChange}
                        placeholder='Surname'
                        className='form-input'
                    />
                    <label className='label'>
                        Phone mobile
                        <span className='star'>*</span>
                    </label>
                    <input type='tel'
                        ref='phoneMobile'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                        placeholder='000-000-00-00'
                        value={this.state.phoneMobile}
                        onChange={this.handleChange}
                        className='form-input'
                        required
                    />
                    <label className='label'>Phone work</label>
                    <input type='tel'
                        ref='phoneWork'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                        placeholder='000-000-00-00'
                        value={this.state.phoneWork}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Email Persone</label>
                    <input type='email'
                        ref='mailPersone'
                        value={this.state.mailPersone}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Email Work</label>
                    <input type='email'
                        ref='mailWork'
                        value={this.state.mailWork}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Birthday Date</label>
                    <input type='date'
                        ref='date'
                        value={this.state.birthdayDate}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <RaisedButton
                        label="back"
                        primary={true}
                        onClick={this.handleClick}
                    />
                    <RaisedButton
                        label={this.props.route.type === 'edit' ? 'save' : 'Create contact'}
                        primary={true}
                        type='submit'
                        className='criate-button'
                    />
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state
});

const mapDispatchToProps = dispatch => ({
    onAdd: (...value) => dispatch(addContact(...value)),
    onEdit: (...value) => dispatch(editContact(...value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);