import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCrashComponent } from './todo-crash.component';

describe('TodoCrashComponent', () => {
  let component: TodoCrashComponent;
  let fixture: ComponentFixture<TodoCrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
