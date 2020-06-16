import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilPriceComponent } from './oil-price.component';

describe('OilPriceComponent', () => {
  let component: OilPriceComponent;
  let fixture: ComponentFixture<OilPriceComponent>;

  beforeEach(async(() => {
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
