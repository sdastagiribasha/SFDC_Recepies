import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track aredetailsvisible=false;
    handleChange(event) {
        this.aredetailsvisible = event.target.checked;
    }
}