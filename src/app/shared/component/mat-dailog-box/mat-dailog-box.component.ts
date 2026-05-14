import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dailog-box',
  templateUrl: './mat-dailog-box.component.html',
  styleUrls: ['./mat-dailog-box.component.scss']
})
export class MatDailogBoxComponent implements OnInit {

  constructor(private _matDialogBoxRef : MatDialogRef<MatDailogBoxComponent>) { }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matDialogBoxRef.close(flag)
  }

}
