import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClickEventComponent } from './click-event/click-event.component';
import { CalComponent } from './cal/cal.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCrashComponent } from './todo-crash/todo-crash.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ClickEventComponent,
    CalComponent,
    TodoComponent,
    TodoCrashComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
