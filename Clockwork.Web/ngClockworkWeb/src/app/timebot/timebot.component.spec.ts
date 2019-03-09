import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimebotComponent } from './timebot.component';

describe('TimebotComponent', () => {
  let component: TimebotComponent;
  let fixture: ComponentFixture<TimebotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimebotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
