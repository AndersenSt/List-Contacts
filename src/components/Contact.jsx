import React from 'react';
import { hashHistory } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack, cyan500 } from 'material-ui/styles/colors';
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
        this.props.onDelete(this.props.contact.id);
        this.props.onUpdate();
    }

    handleEdit() {
        hashHistory.push(`/edit-contact/${this.props.contact.id}`);
    }

    render() {

        const iconButton = (
            <IconButton
                touch={true}
                onClick={this.handleClick}
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const iconMenu = (
            <IconMenu
                iconButtonElement={iconButton}
                open={this.state.open}
            >
                <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
                <MenuItem onClick={this.handleClick}>Cancel</MenuItem>
            </IconMenu>
        );

        const contact = this.props.contact;

        const nestedItems = ([
            <ListItem
                disabled={true}
                key={2}
                leftIcon={<CommunicationCall color={cyan500} />}
                primaryText={<a
                    href={`tel:${contact.phone.mobile}`}
                    className='link'
                >
                    {contact.phone.mobile}
                </a>}
                secondaryText="Mobile"
            />,
            <ListItem
                disabled={true}
                key={3}
                leftIcon={<CommunicationCall color={cyan500} />}
                primaryText={<a
                    href={`tel:${contact.phone.work}`}
                    className='link'
                >
                    {contact.phone.work}
                </a>}
                secondaryText="Work"
            />,
            <ListItem
                disabled={true}
                key={4}
                leftIcon={<CommunicationEmail color={cyan500} />}
                primaryText={<a
                    href={`mailto:${contact.mail.persone}`}
                    className='link'
                >
                    {contact.mail.persone}
                </a>}
                secondaryText="Personal"
            />,
            <ListItem
                disabled={true}
                key={5}
                leftIcon={<CommunicationEmail color={cyan500} />}
                primaryText={<a
                    href={`mailto:${contact.mail.work}`}
                    className='link'
                >
                    {contact.mail.work}
                </a>}
                secondaryText="Work"
            />,
            <ListItem
                disabled={true}
                key={6}
                leftIcon={<Cake color={cyan500} />}
                primaryText={contact.birthdayDate}
                secondaryText="Birthday Date"
            />
        ]);

        return (
            <List>
                <ListItem
                    key={1}
                    leftAvatar={<Avatar src="" />}
                    rightIconButton={iconMenu}
                    primaryText={`${contact.name} ${contact.surname}`}
                    open={this.state.nestedItemsOpen}
                    onClick={this.handleNestedItemsClick}
                    nestedItems={nestedItems}
                />
            </List>
        );
    }
}

export default ListContacts;