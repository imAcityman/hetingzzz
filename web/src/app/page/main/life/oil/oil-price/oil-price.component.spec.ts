import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OilPriceComponent } from './oil-price.component';

describe('OilPriceComponent', () => {
  let component: OilPriceComponent;
  let fixture: ComponentFixture<OilPriceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
