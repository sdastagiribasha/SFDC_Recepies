import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ThirdQuestion extends NavigationMixin(LightningElement) {

get options() {
    return [
            { label: 'Ethereum', value: 'option1' },

            { label: 'Cardano', value: 'option2' },
        
            { label: 'Bitcoin', value: 'option3' },
        
            ]
            };

            gotothirdquestion() {

                this[NavigationMixin.Navigate]({
        
                    type: 'standard__navItemPage',
                
                    attributes: {
                
                        apiName:'Quiz_fourth',
                
                    },
                
                });

    }
}