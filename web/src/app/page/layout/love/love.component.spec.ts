import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoveComponent } from './love.component';

describe('LoveComponent', () => {
  let component: LoveComponent;
  let fixture: ComponentFixture<LoveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
