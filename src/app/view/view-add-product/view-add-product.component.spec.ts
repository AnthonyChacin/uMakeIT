import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddProductComponent } from './view-add-product.component';

describe('ViewAddProductComponent', () => {
  let component: ViewAddProductComponent;
  let fixture: ComponentFixture<ViewAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
