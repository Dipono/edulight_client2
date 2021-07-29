import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOfKeenComponent } from './next-of-keen.component';

describe('NextOfKeenComponent', () => {
  let component: NextOfKeenComponent;
  let fixture: ComponentFixture<NextOfKeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOfKeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextOfKeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
