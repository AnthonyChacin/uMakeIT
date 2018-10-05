import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductCustomizationComponent } from './view-product-customization.component';

describe('ViewProductCustomizationComponent', () => {
  let component: ViewProductCustomizationComponent;
  let fixture: ComponentFixture<ViewProductCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
