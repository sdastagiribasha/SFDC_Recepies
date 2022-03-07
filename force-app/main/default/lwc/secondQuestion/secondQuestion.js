import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class SecondQuestion extends NavigationMixin(LightningElement) {

    get options() {
        return [
                { label: 'Ola', value: 'option1' },

                { label: 'Swiggy', value: 'option2' },
            
                { label: 'Oyo', value: 'option3' }
                ]
                };

    gotothirdquestion() {

        this[NavigationMixin.Navigate]({

            type: 'standard__navItemPage',
        
            attributes: {
        
                apiName:'Quiz_Third',
        
            },
        
        });

    }
}