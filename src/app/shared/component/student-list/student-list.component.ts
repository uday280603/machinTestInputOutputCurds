import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../../models/Istudent';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDailogBoxComponent } from '../mat-dailog-box/mat-dailog-box.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @Input() getAllStudent!: Istudent[];

  @Output() emitRemoveId: EventEmitter<number> = new EventEmitter<number>();
    @Output() emitEditObj: EventEmitter<Istudent> = new EventEmitter<Istudent>();

  constructor(private _matDialogBox: MatDialog) {}

  ngOnInit(): void {}

  trackByFun(index: number, student: Istudent) {
    return student.id;
  }

  onRemovestudent(removeId: number) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let matDialogRef = this._matDialogBox.open(MatDailogBoxComponent, config);
    matDialogRef.afterClosed().subscribe((getconfirm) => {
      if (getconfirm === true) {
        this.emitRemoveId.emit(removeId);
      }
    });
  }

  onEditStudent(editObj : Istudent){

    this.emitEditObj.emit(editObj);



  }
}
