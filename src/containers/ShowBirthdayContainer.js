import { connect } from 'react-redux';
import ShowBirthday from '../components/ShowBirthday';

const showBirthday = contacts => {
        const today = new Date().toLocaleString();
        const day = today.slice(0, 2);
        const month = today.slice(3, 5);
        const birthdayContacts = contacts.filter(contact => {
            const contDay = contact.birthdayDate.slice(-2);
            const contMonth = contact.birthdayDate.slice(5, 7);
            if (contDay === day && contMonth === month) {
                return contact;
            }
        });
        return birthdayContacts;
    }

const mapStateToProps = state => ({
    birthdayContacts: showBirthday(state.contacts)
});

export default connect(mapStateToProps)(ShowBirthday);