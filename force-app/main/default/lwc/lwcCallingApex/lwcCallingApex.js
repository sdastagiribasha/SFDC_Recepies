import ContactMobile from '@salesforce/schema/Case.ContactMobile';
import { LightningElement, track } from 'lwc';

export default class LwcCallingApex extends LightningElement {

    @track name='Ashraf';
    @track email='basha@salesforce.com';
    @track phone='0987654321';

    handleclick() {

       ContactMobile.log(this.name='basha');
        
        console.log(this.email='basha@gmail.com');
    }

}