/**
 * Created by apolyak on 2019. 10. 31..
 */

import { LightningElement, wire, track } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class StudentBrowser extends LightningElement {

    @wire(getStudents, { instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId' })
    Students;
    @wire(CurrentPageReference) pageRef;

    @track selectedDeliveryId = "";
    @track selectedInstructorId = "";

    deliverySelected(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorId = event.detail.instructorId;
    }

    handleNotify(event){
        const studentId = event.detail.studentId;
        fireEvent(this.pageRef, 'studentChange', {
            studentId
        });
    }



}