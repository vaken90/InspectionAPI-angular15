import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInspectionsComponent } from './show-inspections.component';

describe('ShowInspectionsComponent', () => {
  let component: ShowInspectionsComponent;
  let fixture: ComponentFixture<ShowInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInspectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
