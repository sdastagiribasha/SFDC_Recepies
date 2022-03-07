import { LightningElement,api } from 'lwc';

export default class LwcChildToParent extends LightningElement {

    @api childcompname=' calling from child component';
    @api childcompdescription='child component Description';
    handlebuttonclick(){
       const evt= new CustomEvent('myfirstevent', {
                                                    detail:{
                                                            childcompname:this.childcompname,
                                                            childcompdescription:this.childcompdescription
                                                            }
                                                   });
       this.dispatchEvent(evt);
    }
}