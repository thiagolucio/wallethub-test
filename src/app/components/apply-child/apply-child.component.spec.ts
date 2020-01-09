import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyChildComponent } from './apply-child.component';

describe('ApplyChildComponent', () => {
  let component: ApplyChildComponent;
  let fixture: ComponentFixture<ApplyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
