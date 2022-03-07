import { LightningElement} from 'lwc';
import findcontacts from '@salesforce/apex/ContactController.findcontacts';
export default class ApexImperativeMethodWithParams extends LightningElement {

    contacts;
    error;
    searchkey=' ';

    handlesearchkeychange(event) {
        this.searchkey = event.target.value;
        findcontacts({searchkey : this.searchkey})
        .then ((result) => {
            this.contacts = result;
            this.error = undefined;
        })
        .catch ((error) => {
            this.error = error;
            this.contacts = undefined;
        });
    }
    /*
    handlechangecontacts() {
        findcontacts({searchkey : this.searchkey})
        .then ((result) => {
            this.contacts = result;
            this.error = undefined;
        })
        .catch ((error) => {
            this.error = error;
            this.contacts = undefined;
        });
    }
    */
}