/**
 * Created by apolyak on 2019. 11. 07..
 */

import { LightningElement, track, wire } from 'lwc';
import { registerListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class StudentDetail extends LightningElement {
    @track studentId;
    @track fields = ['Name', 'Email', 'Phone', 'Description'];

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
    registerListener('studentChange', this.handleStudentChange, this);
    }

        handleStudentChange(event) {
        this.studentId = event.studentId;
    }
}