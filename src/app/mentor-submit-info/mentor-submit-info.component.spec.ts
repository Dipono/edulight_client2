import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSubmitInfoComponent } from './mentor-submit-info.component';

describe('MentorSubmitInfoComponent', () => {
  let component: MentorSubmitInfoComponent;
  let fixture: ComponentFixture<MentorSubmitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorSubmitInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSubmitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
