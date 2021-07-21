import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorBackgroundInfoComponent } from './mentor-background-info.component';

describe('MentorBackgroundInfoComponent', () => {
  let component: MentorBackgroundInfoComponent;
  let fixture: ComponentFixture<MentorBackgroundInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorBackgroundInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorBackgroundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
