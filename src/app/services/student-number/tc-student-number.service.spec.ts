import { TestBed } from '@angular/core/testing';

import { TcStudentNumberService } from './tc-student-number.service';

describe('TcStudentNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TcStudentNumberService = TestBed.get(TcStudentNumberService);
    expect(service).toBeTruthy();
  });
});
