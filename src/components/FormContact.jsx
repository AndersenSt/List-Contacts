import React from 'react';
import { hashHistory } from 'react-router';

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
        const dataContact = {
            id: this.props.params.id,
            name: this.state.name.toUpperCase(),
            surname: this.state.surname.toUpperCase(),
            birthdayDate: this.state.birthdayDate,
            mail: {
                persone: this.state.mailPersone,
                work: this.state.mailWork,
            },
            phone: {
                mobile: this.state.phoneMobile,
                work: this.state.phoneWork
            }
        };

        if (this.props.route.type === 'add') {
            this.props.addContact(dataContact);
        };
        if (this.props.route.type === 'edit') {
            this.props.editContact(dataContact);
        };
        hashHistory.push('/');
        this.props.updateContacts();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
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
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                        className='form-input'
                        required
                    />
                    <label className='label'>Surname</label>
                    <input type='text'
                        name='surname'
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
                        name='phoneMobile'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                        placeholder='000-000-00-00'
                        value={this.state.phoneMobile}
                        onChange={this.handleChange}
                        className='form-input'
                        required
                    />
                    <label className='label'>Phone work</label>
                    <input type='tel'
                        name='phoneWork'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                        placeholder='000-000-00-00'
                        value={this.state.phoneWork}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Email Persone</label>
                    <input type='email'
                        name='mailPersone'
                        value={this.state.mailPersone}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Email Work</label>
                    <input type='email'
                        name='mailWork'
                        value={this.state.mailWork}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <label className='label'>Birthday Date</label>
                    <input type='date'
                        name='birthdayDate'
                        value={this.state.birthdayDate}
                        onChange={this.handleChange}
                        className='form-input'
                    />
                    <RaisedButton
                        label="cancel"
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

export default FormContact;

