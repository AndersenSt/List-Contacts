import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Notifications from 'material-ui/svg-icons/Social/notifications';
import NotificationsActive from 'material-ui/svg-icons/Social/notifications-active';
import { cyan500, pinkA400 } from 'material-ui/styles/colors';
import { ListItem } from 'material-ui/List';
import Cake from 'material-ui/svg-icons/Social/cake';

class ShowBirthday extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClick}
            />,
        ];

        const todayBirthday = this.props.birthdayContacts;
        return (
            <div>
                <IconButton tooltip="Show Birthday" onClick={this.handleClick}>
                    {
                        todayBirthday.length === 0 ?
                            <Notifications color={cyan500} /> :
                            <NotificationsActive color={pinkA400} />
                    }
                </IconButton>
                <Dialog
                    title="Today celebrate birthday:"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {todayBirthday.map((contact, index) =>
                        <ListItem
                            key={index}
                            leftIcon={<Cake color={cyan500} />}
                            primaryText={`${contact.name} ${contact.surname}`}
                        />
                    )}
                </Dialog>
            </div>
        );
    }
}

export default ShowBirthday;

