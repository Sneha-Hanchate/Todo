import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
a:number=0;
b:number=0;
total:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.total=this.a + this.b;
  }
  sub(){
    this.total=this.a - this.b;
  }
  mul(){
    this.total=this.a * this.b;
  }
  div(){
    this.total=this.a / this.b;
  }

}
