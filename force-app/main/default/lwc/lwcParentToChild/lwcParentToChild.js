import { LightningElement,api } from 'lwc';

export default class LwcParentToChild extends LightningElement {

    @api messagefromparent;
    @api parentcompname;
}