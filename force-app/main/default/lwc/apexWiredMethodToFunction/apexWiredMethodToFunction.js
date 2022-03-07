import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/contactListController.getContactList';
export default class ApexWiredMethodToFunction extends LightningElement {

    contacts;
    error;

    @wire(getContactList)
    wiredContacts({ data,error}) {
        if(data) {
            this.contacts = data;
            this.error = undefined;
        } else if(error) {
            this.contacts = undefined;
            this.error = error;
        }
    }
}