import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {
	constructor(props) {
		super(props);
		this.addContact = this.addContact.bind(this);
	}

	state = {
		contacts: [{
			name: 'Birkan ÖZCAN',
			phone: '05308468687'
		},{
			name: 'Onur BAYRAKTAROĞLU',
			phone: '05308461236'
		}]
	};

	addContact(contact){
   const {contacts} = this.state
   contacts.push(contact);
   
   this.setState ({
     contacts
   });
  }

  render() {
    return (
      <div className="App">
				<Contacts
          addContact={this.addContact}
          contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;

// Birkan ÖZCAN // Frontend Developer