import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class FourthQuestion extends NavigationMixin(LightningElement) {

    get options() {
        return [
                { label: 'MySpace', value: 'option1' },
    
                { label: 'Twitter', value: 'option2' },
            
                { label: 'Weibo', value: 'option3' },

                { label: 'Facebook', value: 'option4' },

                { label: 'Line', value: 'option5' },
            
                ]
                };
    
                gotofourthquestion() {
    
                    this[NavigationMixin.Navigate]({
            
                        type: 'standard__navItemPage',
                    
                        attributes: {
                    
                            apiName:'Quiz_Fifth',
                    
                        },
                    
                    });
    
        }
}