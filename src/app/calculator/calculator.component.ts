import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
a:number=10;
b:string="shruti";
no:number =  0;
c:number = 0;
total:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  addf(){
this.total = this.no + this.c;
  }
  sub(){
    this.total = this.no - this.c;
      }
  mul(){
        this.total = this.no * this.c;
          }
  div(){
        this.total = this.no / this.c;
              }
  clr(){
        this.total = 0;
        this.no=0;
          this.c=0;
       }


}
