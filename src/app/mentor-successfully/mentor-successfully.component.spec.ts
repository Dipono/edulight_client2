import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSuccessfullyComponent } from './mentor-successfully.component';

describe('MentorSuccessfullyComponent', () => {
  let component: MentorSuccessfullyComponent;
  let fixture: ComponentFixture<MentorSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
