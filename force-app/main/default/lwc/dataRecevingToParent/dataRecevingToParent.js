import { LightningElement } from 'lwc';

export default class DataRecevingToParent extends LightningElement {

    handlechildevent(event) {
        const childcompname = event.details.childcompname;
        const childcompdescription =event.details.childcompdescription;
        alert('Event handled in Parent component');
        alert('child comp name is:' + childcompname);
        alert('child comp description:'+ childcompdescription);
    }
}