import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorPersonalInfoComponent } from './mentor-personal-info.component';

describe('MentorPersonalInfoComponent', () => {
  let component: MentorPersonalInfoComponent;
  let fixture: ComponentFixture<MentorPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
