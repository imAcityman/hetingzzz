import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBigDateComponent } from './edit-big-date.component';

describe('EditBigDateComponent', () => {
  let component: EditBigDateComponent;
  let fixture: ComponentFixture<EditBigDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBigDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBigDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
