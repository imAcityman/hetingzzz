import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigDateComponent } from './big-date.component';

describe('BigDateComponent', () => {
  let component: BigDateComponent;
  let fixture: ComponentFixture<BigDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
