import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNumberDialogComponent } from './student-number-dialog.component';

describe('StudentNumberDialogComponent', () => {
  let component: StudentNumberDialogComponent;
  let fixture: ComponentFixture<StudentNumberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNumberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
