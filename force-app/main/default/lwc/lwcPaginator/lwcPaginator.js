import { LightningElement } from 'lwc';

export default class LwcPaginator extends LightningElement {

    handlenext() {
        const nextevent = new CustomEvent('next');
        this.dispatchEvent(nextevent);

    }
    handleprevious() {
        const previousevent = new CustomEvent('previous');
        this.dispatchEvent(previousevent);

    }
}