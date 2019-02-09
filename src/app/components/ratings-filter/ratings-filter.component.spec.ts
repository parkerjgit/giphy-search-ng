import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsFilterComponent } from './ratings-filter.component';

describe('RatingsFilterComponent', () => {
  let component: RatingsFilterComponent;
  let fixture: ComponentFixture<RatingsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
