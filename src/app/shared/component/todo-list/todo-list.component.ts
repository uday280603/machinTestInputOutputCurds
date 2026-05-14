import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/Itodo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDailogBoxComponent } from '../mat-dailog-box/mat-dailog-box.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

   @Input() getAllTodos !: Itodo[];
   @Output() emitRemoveid : EventEmitter<number> = new EventEmitter<number>();
    @Output() emitEditTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor(private _matDialogBox : MatDialog) { }

  ngOnInit(): void {
  }

  trackByFun(index : number, todo : Itodo){
    return todo.todoId;
  }

  onRemoveTodo(todoId : number){

    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    let _matDialogRef = this._matDialogBox.open(MatDailogBoxComponent,config);
    _matDialogRef.afterClosed().subscribe(getConfirm =>{
      if(getConfirm===true){
        this.emitRemoveid.emit(todoId);

      }
    })

  }
  onEditTodo(editTodo: Itodo){
  this.emitEditTodo.emit(editTodo)

  }

}
