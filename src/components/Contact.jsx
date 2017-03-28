import React from 'react';
import { hashHistory } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack, indigo500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Cake from 'material-ui/svg-icons/Social/cake';

class ListContacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            nestedItemsOpen: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNestedItemsClick = this.handleNestedItemsClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleClick(event) {
        this.setState({
            open: !this.state.open
        });
        event.stopPropagation();
    }

    handleNestedItemsClick() {
        this.setState({
            nestedItemsOpen: !this.state.nestedItemsOpen
        });
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleEdit() {
         hashHistory.push(`/edit-contact/${this.props.id}`);
    }

    render() {
        return (
            <List>
                <ListItem
                    key={1}
                    leftAvatar={<Avatar src="" />}
                    rightIconButton={
                        <IconMenu
                            iconButtonElement={
                                <IconButton
                                    touch={true}
                                    onClick={this.handleClick}
                                >
                                    <MoreVertIcon color={grey400} />
                                </IconButton>
                            }
                            open={this.state.open}
                            onClick={this.handleClick}
                        >
                            <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                            <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                        </IconMenu>
                    }
                    primaryText={`${this.props.name} ${this.props.surname}`}
                    open={this.state.nestedItemsOpen}
                    onClick={this.handleNestedItemsClick}
                    nestedItems={[
                        <ListItem
                            key={2}
                            leftIcon={<CommunicationCall color={indigo500} />}
                            primaryText={this.props.phoneMobile}
                            secondaryText="Mobile"
                        />,
                        <ListItem
                            key={3}
                            leftIcon={<CommunicationCall color={indigo500} />}
                            primaryText={this.props.phonWork}
                            secondaryText="Work"
                        />,
                        <ListItem
                            key={4}
                            leftIcon={<CommunicationEmail color={indigo500} />}
                            primaryText={this.props.mailPersone}
                            secondaryText="Personal"
                        />,
                        <ListItem
                            key={5}
                            leftIcon={<CommunicationEmail color={indigo500} />}
                            primaryText={this.props.mailWork}
                            secondaryText="Work"
                        />,
                        <ListItem
                            key={6}
                            leftIcon={<Cake color={indigo500} />}
                            primaryText={this.props.birthdayDate}
                            secondaryText="Birthday Date"
                        />,
                    ]}
                />
            </List>
        );
    }
}

export default ListContacts;