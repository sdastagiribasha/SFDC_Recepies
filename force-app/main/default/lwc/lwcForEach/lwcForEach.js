import Title from '@salesforce/schema/Contact.Title';
import { LightningElement } from 'lwc';

export default class LwcForEach extends LightningElement {

    stuents = [
        {
            Id: '101',
            Name: 'Srinu',
            Branch: 'BSC'
        },
        {
            Id: '102',
            Name:'Kishore',
            Branch:'BCom'
        },
        {
            Id: '103',
            Name: 'Mukesh',
            Branch: 'BZC'
        }
    ];
}

/*
contacts = [
        {
        Id: '0037F000027oLZ0QAM',
        Name: 'Amy Taylor',
        Title: 'VP of Engineering'
        },
        {
        Id: '0037F00002g0y76QAA',
        Name: 'Michael Jones',
        Title: 'VP of Sales'
        }
    ];
*/