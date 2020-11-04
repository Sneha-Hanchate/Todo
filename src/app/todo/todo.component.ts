import { Component, OnInit } from '@angular/core';
import {Todo} from './data';
import {Employee} from './data';
import {Product} from './data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
title: string;
status: string;
price: number;
name:string;
salary:number;
quantity:number;

arrTodos: Todo[] = [
  new Todo(1, 'heelo hi', 'done'),
  new Todo(2, 'hey hiii', 'pending'),
];
arrEmployee: Employee[] = [
  new Employee(1, 'shruti', 20000),
  new Employee(2, 'hiii', 48888),
];
arrProduct: Product[] = [
  new  Product(1, 'shruti', 2, 3000),
  new  Product(2, 'sneha', 8 , 4000),
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
    this.title="Enter Name";
    this.status="Enter Status";

  }

}
