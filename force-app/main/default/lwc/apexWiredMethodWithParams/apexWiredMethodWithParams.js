import { LightningElement, wire } from 'lwc';
import findcontacts from '@salesforce/apex/ContactController.findcontacts';
const delay = 300;//declaring for delay the result
export default class ApexWiredMethodWithParams extends LightningElement {

    searchkey =' ';

    @wire(findcontacts,{searchkey : '$searchkey'}) contacts;
    
    handleChange(event) {
        window.clearTimeout(this.delayTimeout);
        this.searchkey = event.target.value;
        console.log(this.searchkey);
        this.delayTimeout = setTimeout(() => {
            this.searchkey = this.searchkey;
        },delay);

    }
}