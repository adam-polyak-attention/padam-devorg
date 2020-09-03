/**
 * Created by apolyak on 2019. 10. 31..
 */

import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Polyák Ádám',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };

    @api selected = false;
    @api selectedStudentId = "";

    get tileSelected() {
        return (this.selectedStudentId===this.student.Id) ? "tile selected " : "tile";
    }

    studentClick(){
        const selectedEvent = new CustomEvent('studentselected', {
            detail: { studentId: this.student.Id }
        });
        this.dispatchEvent(selectedEvent);
    }

    studentClick(event){
        const selectedEvent = new CustomEvent('studentselected', {
            bubbles: true,
            composed: true,
            detail: {
                studentId: this.student.Id
            }
        });
        this.dispatchEvent(selectedEvent);
    }


}