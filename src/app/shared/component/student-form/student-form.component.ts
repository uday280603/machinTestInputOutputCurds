import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Istudent } from '../../models/Istudent';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() getEditObj!: Istudent;
  isInEditMode: boolean = false;

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitNewStudent: EventEmitter<Istudent> =
    new EventEmitter<Istudent>();
      @Output() emitUpdateObj: EventEmitter<Istudent> =
    new EventEmitter<Istudent>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.fname.nativeElement.value = this.getEditObj.fname;
      this.lname.nativeElement.value = this.getEditObj.lname;
      this.email.nativeElement.value = this.getEditObj.email;
      this.contact.nativeElement.value = this.getEditObj.contact;
      this.isActive.nativeElement.value = this.getEditObj.isActive;
    }
  }

  ngOnInit(): void {}

  onAddStudent() {
    let val1: string = this.fname.nativeElement.value;
    let val2: string = this.email.nativeElement.value;

    if (val1.length > 0 && val2.length > 0) {
      let NEW_STUDENT: Istudent = {
        id: Date.now(),
        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        isActive: this.isActive.nativeElement.value === 'true' ? true : false,
      };

      console.log(NEW_STUDENT);
      this.emitNewStudent.emit(NEW_STUDENT);
      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.contact.nativeElement.value = '';
      this.isActive.nativeElement.value = true;
    }
  }

  onUpdateStudent() {
    
    let UPDATED_OBJ : Istudent = {
      id: this.getEditObj.id,
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'true' ? true : false,
    };

     console.log(UPDATED_OBJ);
      this.emitUpdateObj.emit(UPDATED_OBJ);
      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.contact.nativeElement.value = '';
      this.isActive.nativeElement.value = true;

      this.isInEditMode = false;

  }
}
