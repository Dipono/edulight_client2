import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorEducationalInfoComponent } from './mentor-educational-info.component';

describe('MentorEducationalInfoComponent', () => {
  let component: MentorEducationalInfoComponent;
  let fixture: ComponentFixture<MentorEducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorEducationalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
