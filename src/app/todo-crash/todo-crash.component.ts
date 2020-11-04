import { Component, OnInit } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-todo-crash',
  templateUrl: './todo-crash.component.html',
  styleUrls: ['./todo-crash.component.css']
})
export class TodoCrashComponent implements OnInit {
  id:number;
  title: string;
  status: string;
  // Name:string;
  // Salary: number;
  // Quantity:number;
  // Id:number;

  arrTodos: Todo[] = [
    new Todo(1, 'heelo hi', 'done'),
    new Todo(2, 'hey hiii', 'pending'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.arrTodos.push(new Todo(this.id, this.title, this.status));
  }

  delete(item: Todo): void {
    this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
  }

  edit(item: Todo): void {
    if (item.status === 'done'){
      item.status = 'pending';
    } else{
      item.status = 'done';
    }
  }
  clear(){
    this.id=0;
    this.title="";
    this.status="";

  }


}
