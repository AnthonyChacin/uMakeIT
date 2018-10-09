import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditViewComponent } from './product-edit-view.component';

describe('ProductEditViewComponent', () => {
  let component: ProductEditViewComponent;
  let fixture: ComponentFixture<ProductEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
