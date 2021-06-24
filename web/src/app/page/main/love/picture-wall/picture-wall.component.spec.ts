import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PictureWallComponent } from './picture-wall.component';

describe('PictureWallComponent', () => {
  let component: PictureWallComponent;
  let fixture: ComponentFixture<PictureWallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
