import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchoolInfoComponent } from './student-school-info.component';

describe('StudentSchoolInfoComponent', () => {
  let component: StudentSchoolInfoComponent;
  let fixture: ComponentFixture<StudentSchoolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchoolInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
