import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeSubmitInfoComponent } from './mentee-submit-info.component';

describe('MenteeSubmitInfoComponent', () => {
  let component: MenteeSubmitInfoComponent;
  let fixture: ComponentFixture<MenteeSubmitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeSubmitInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeSubmitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
