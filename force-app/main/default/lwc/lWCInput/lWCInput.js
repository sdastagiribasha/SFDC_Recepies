import { LightningElement, track } from 'lwc';

export default class LWCInput extends LightningElement {

    @track fname ='SFDC';
    handleChange(event) {
        this.fname = event.target.value;      
        console.log('Name changing: ' + this.fname);

    }
}