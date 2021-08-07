import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeInfoComponent } from './mentee-info.component';

describe('MenteeInfoComponent', () => {
  let component: MenteeInfoComponent;
  let fixture: ComponentFixture<MenteeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
