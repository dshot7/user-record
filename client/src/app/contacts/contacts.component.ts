import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
	contacts: Contact[];
	contact: Contact;
	user_name:string;
	address:string;
	phone:string;
  email:string;

  constructor(private contactService: ContactService) { }


  addContact()
  {
  	const newContact ={
  		user_name: this.user_name,
  		address: this.address,
  		phone: this.phone,
      email: this.email
  	}
  		this.contactService.addContact(newContact)
  		.subscribe(contact => {
  			this.contacts.push(contact);
  			this.contactService.getContacts()
  		.subscribe(contacts =>
  			this.contacts =contacts);
  		});
  }


  deleteContact(id:any)
  {
  	var contacts = this.contacts;
  	this.contactService.deleteContact(id)
  	.subscribe(data =>{
  		if(data.n==1){
  			for(var i=0;i<contacts.length;i++){
  				if(contacts[i]._id == id){
  					contacts.splice(i,1);
  				}
  			}
  		}
  	})
  }
  ngOnInit() {
  	this.contactService.getContacts()
  		.subscribe(contacts =>
  			this.contacts =contacts);
  }

}
