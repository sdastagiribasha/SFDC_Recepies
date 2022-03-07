import { LightningElement,wire} from 'lwc';
import getContactList from 'data/wireGetContactListProvider';

export default class LwcBubbleExample extends LightningElement {

    selectedContact;

    @wire(getContactList) contacts = {};

    handleContactSelect(event) {
        this.selectedContact = event.target.contact;
    }
}