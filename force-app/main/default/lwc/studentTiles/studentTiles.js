/**
 * Created by apolyak on 2019. 10. 31..
 */

import { LightningElement, api, track } from 'lwc';

export default class StudentTiles extends LightningElement {

    @api studentList = [];
    @api selectedStudentId = "";
    @track selectedStudentId = "";

    studentSelected(event){
        this.selectedStudentId=event.detail.studentId;
    }
}