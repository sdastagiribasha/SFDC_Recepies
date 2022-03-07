import { LightningElement } from 'lwc';

export default class LwcConstructor extends LightningElement {

    constructor() {
        super();
        console.log('constructor calling:');
    }
}