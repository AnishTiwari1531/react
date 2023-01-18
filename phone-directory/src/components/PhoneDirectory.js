import React, { Component } from 'react'
import ContactsList from './ContactsList'
import ShowContacts from './ShowContacts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            addContactList: [{
                id: 1,
                name: "Anish Tiwari",
                phone: "8989899899"
            },
            {
                id: 2,
                name: "AK Tiwari",
                phone: "8989877787"
            }]
        }
    }

    deleteContactHandler = (contactId) => {
        let addContactList = this.state.addContactList;
        let contactIndex = 0;
        addContactList.forEach(function (contact, index) {
            if (contact.id === contactId) {
                contactIndex = index;
            }
        }, this);
        let newContact = addContactList;
        newContact.splice(contactIndex, 1);
        this.setState({ contact: newContact });
    }
    
    addContactListHandler = (newContact) => {
        let addContactList = this.state.addContactList;
        if (addContactList.length > 0) {
            newContact.id = addContactList[addContactList.length - 1].id + 1;
        } else {
            newContact.id = 1;
        }
        addContactList.push(newContact);
        this.setState({ addContactList: addContactList });
    }

    render() {
        return (
            // <div>
            //     <ContactsList addContactListHandler={this.addContactListHandler} />
            //     <ShowContacts addContactList={this.state.addContactList}/>
            // </div>


            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowContacts {...props} addContactList={this.state.addContactList} deleteContactHandler={this.state.deleteContactHandler}/>} />
                    <Route exact path="/add" render={({ history }, props) => <ContactsList history={history} {...props} addContactListHandler={this.addContactListHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;