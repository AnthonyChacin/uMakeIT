import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchViewComponent } from './product-search-view.component';

describe('ProductSearchViewComponent', () => {
  let component: ProductSearchViewComponent;
  let fixture: ComponentFixture<ProductSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
