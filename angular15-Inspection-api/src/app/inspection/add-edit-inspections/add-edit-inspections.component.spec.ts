import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInspectionsComponent } from './add-edit-inspections.component';

describe('AddEditInspectionsComponent', () => {
  let component: AddEditInspectionsComponent;
  let fixture: ComponentFixture<AddEditInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
