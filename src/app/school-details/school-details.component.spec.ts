import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDetailsComponent } from './school-details.component';

describe('SchooldetailsComponent', () => {
  let component: SchoolDetailsComponent;
  let fixture: ComponentFixture<SchoolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
