import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//export default class quizTask extends LightningElement {   
export default class quizTask extends NavigationMixin(LightningElement) {
    get options() {
        return [
                { label: 'Mark Zucker Berg', value: 'option1' },

                { label: 'Elon Musk', value: 'option2' },
            
                { label: 'Jeff Bezoss', value: 'option3' },
            
                { label: 'Sundar Pichai', value: 'option4' },
                ]
                };

    gotosecondquestion() {

        this[NavigationMixin.Navigate]({

            type: 'standard__navItemPage',
        
            attributes: {
        
                apiName: 'Quiz',
        
            },
        
        });
        

    }
    
}
