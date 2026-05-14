import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/Itodo';
import { todoData } from '../../const/todoData';
import { SnackBarService } from '../../service/snackBar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  todoArr!: Itodo[];

  editTodoObj !:Itodo;

  constructor(private _snackBar : SnackBarService) {}

  ngOnInit(): void {
    this.todoArr = todoData;
  }

  getNewTodo(todo: Itodo) {
    this.todoArr.unshift(todo);
    this._snackBar.openSnackBar(`New Todo ${todo.todoId} is Added Successfully...!`)
  }
  getRemoveId(todoId: number){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todoId)
    this.todoArr.splice(getIndex,1);
    this._snackBar.openSnackBar(` Todo with  ${todoId} is Removed Successfully...!`)
  }

  getEditTodo(editObj : Itodo){

    this.editTodoObj= editObj;
  }

  getUpdaetdObj(updatedObj : Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === updatedObj.todoId);
    this.todoArr[getIndex] = updatedObj;
     this._snackBar.openSnackBar(` Todo with  ${updatedObj.todoId} is Updated Successfully...!`)
  }

 
}
