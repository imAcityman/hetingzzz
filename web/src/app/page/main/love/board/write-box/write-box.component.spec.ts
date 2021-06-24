import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBoxComponent } from './write-box.component';

describe('WriteBoxComponent', () => {
  let component: WriteBoxComponent;
  let fixture: ComponentFixture<WriteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
