import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/contactListController.getContactList';
export default class ContactsListDemo extends LightningElement {

@wire(getContactList) contacts;

}

   /*
    @track searchkey;
    @track contacts;
    @track error;
    @wire(getContactlist) 
    wiredcontact({error,data}){
        if(data)
        {
            this.contacts = data;
        }
        if(error)
        {
            this.error = error;
            console.log('Error'+ error)
        }
    }
    handlechange(event) {
        eventevent.preventDefault();
        /*eslint-disable no-console*/
        /*
        console.log('value' +event.target.value);
        console.log(this.contacts);
    }*/