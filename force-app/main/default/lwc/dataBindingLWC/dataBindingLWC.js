import { api, LightningElement } from 'lwc';

export default class DataBindingLWC extends LightningElement {

    @api greeting=' ';
    handlechange(event) {
         this.greeting = event.target.value;
         console.log('Data binding Example:' + this.greeting);
    }

}