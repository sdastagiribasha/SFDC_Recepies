import { LightningElement, track } from 'lwc';

export default class LwcIterator extends LightningElement {
    
    students = [
        {
            Id: '112',
            Name: 'Basha',
            Branch: 'CS',
        },
        {
            Id: '113',
            Name: 'Sohail',
            Branch: 'CS',
        },
        {
            Id: '114',
            Name: 'Shoyeb',
            Branch: 'IT',
        },
    ];
}