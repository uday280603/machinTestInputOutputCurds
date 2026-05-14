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
import { Itodo } from '../../models/Itodo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false;

  @Input() getEditTodo!: Itodo;
  @ViewChild('todoItem') todoItem!: ElementRef;
  @ViewChild('isCompleted') isCompleted!: ElementRef;

  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emitUpdated: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditTodo'].currentValue) {
      this.isInEditMode = true;
      this.todoItem.nativeElement.value = this.getEditTodo.todoItem;
      this.isCompleted.nativeElement.value = this.getEditTodo.isCompleted;
    }
  }

  ngOnInit(): void {}

  onAddTodo() {
    let val1: string = this.todoItem.nativeElement.value;
    if (val1.length > 0) {
      let NEW_TODO: Itodo = {
        todoId: Date.now(),
        todoItem: this.todoItem.nativeElement.value,
        isCompleted:
          this.isCompleted.nativeElement.value === 'true' ? true : false,
      };
      console.log(NEW_TODO);

      this.emitNewTodo.emit(NEW_TODO);
      this.todoItem.nativeElement.value = '';
    }
  }

  onUpdateTodo() {
    let UPDATED_TODO: Itodo = {
      todoId: this.getEditTodo.todoId,
      todoItem: this.todoItem.nativeElement.value,
      isCompleted:
        this.isCompleted.nativeElement.value === ' true' ? true : false,
    };

    this.emitUpdated.emit(UPDATED_TODO);

    this.todoItem.nativeElement.value = '';
    this.isInEditMode = false;
  }
}
