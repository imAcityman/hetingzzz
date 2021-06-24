import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OilComponent } from './oil.component';

describe('OilComponent', () => {
  let component: OilComponent;
  let fixture: ComponentFixture<OilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
