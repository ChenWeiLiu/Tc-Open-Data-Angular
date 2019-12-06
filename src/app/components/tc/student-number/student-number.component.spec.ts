import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNumberComponent } from './student-number.component';

describe('StudentNumberComponent', () => {
  let component: StudentNumberComponent;
  let fixture: ComponentFixture<StudentNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
