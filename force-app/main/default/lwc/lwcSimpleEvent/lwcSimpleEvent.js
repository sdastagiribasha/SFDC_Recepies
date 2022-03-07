import { LightningElement, track } from 'lwc';

export default class LwcSimpleEvent extends LightningElement {
    
    @track page=1;
    handlenextevent() {
        this.page = this.page + 1;
    }
    handlepreviousevent() {
        if(this.page >1)
        {
            this.page = this.page - 1;
        }
    }
}