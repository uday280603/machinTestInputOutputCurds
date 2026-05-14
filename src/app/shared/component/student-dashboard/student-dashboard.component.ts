import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/Istudent';
import { studentData } from '../../const/studentData';
import { SnackBarService } from '../../service/snackBar';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  studentArr !: Istudent[];
  
  editStudentObjToPatch !: Istudent;

  constructor( private _snackBar : SnackBarService) { }

  ngOnInit(): void {

    this.studentArr =  studentData;
  }



  getNewStudent(newObj : Istudent){
    this.studentArr.unshift(newObj);
    this._snackBar.openSnackBar(`New  Student ${newObj.id} is Added Successfully...!`);
  }


  getRemoveid(removeId : number){
    let getIndex = this.studentArr.findIndex(s => s.id === removeId);
    this.studentArr.splice(getIndex,1);
     this._snackBar.openSnackBar(`  Student with  id ${removeId} is Removed Successfully...!`)
  
  }

  getEditObj(editStudentObj : Istudent){

    this.editStudentObjToPatch = editStudentObj;

  }

  getUpdatedObj(updatedObj: Istudent){

    let getIndex = this.studentArr.findIndex(s => s.id === updatedObj.id)
    this.studentArr[getIndex] = updatedObj;
      this._snackBar.openSnackBar(`  Student with  id ${updatedObj.id} is Updated Successfully...!`)

  }
}
