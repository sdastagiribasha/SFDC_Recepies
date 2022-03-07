import { LightningElement,api } from 'lwc';

export default class DataPassingFromChild extends LightningElement {

    @api childcompname ='Name of comp is ChildComponent';
    @api childcompdescription = 'Name of description is Testing';
    handlebutton() {
        const eve = new CustomEvent('myfirstevent', { details :
                                                            {
                                                                childcompname: this.childcompname,
                                                                childcompdescription: this.childcompdescription 
                                                            }
                                                             });
        this.dispatchEvent(eve);
    }
}