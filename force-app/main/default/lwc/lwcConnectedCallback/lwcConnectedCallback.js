import { LightningElement } from 'lwc';

export default class LwcConnectedCallback extends LightningElement {

    constructor() {
        super();
        console.log('inside constructor');
    }
    // connectedCallback() is fires when ever component is inserted in to the DOM.
    // disconnectedCallback() is fires when ever component is removed into the DOM.
    connectedCallback() 
    {
        console.log('Inside connected callback');
    }
}