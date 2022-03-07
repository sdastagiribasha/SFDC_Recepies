import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class FifthQuestion extends NavigationMixin(LightningElement) {

    get options() {
        return [
                { label: 'Cheetah', value: 'option1' },
    
                { label: 'Leopard', value: 'option2' },
            
                { label: 'Tiger', value: 'option3' },

                { label: 'Lion', value: 'option4' },
            
                ]
                };
    
                gotofifthdquestion() {
    
                    this[NavigationMixin.Navigate]({
            
                        type: 'standard__navItemPage',
                    
                        attributes: {
                    
                            apiName: this.tabName,
                    
                        },
                    
                    });
    
        }

}