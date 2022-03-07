import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/contactListController.getContactList';
export default class ApexImperativeMethod extends LightningElement {

    @track contacts;
    @track error;

    handlecontactlist() {
        getContactList()
        .then (result => {
            console.log(result);
        })
        .catch (error => {
            this.error = error ;
        });
    }
}