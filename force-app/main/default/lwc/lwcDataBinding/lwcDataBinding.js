import { LightningElement } from 'lwc';

export default class LwcDataBinding extends LightningElement {
   // message = 'This is For DataBinding Example';

   greeting =' ';
   handleChange(event) {
    this.greeting = event.target.value;
    console.log('Databinding Practice :' +this.greeting);
   }
}