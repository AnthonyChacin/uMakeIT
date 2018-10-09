import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompletionViewComponent } from './order-completion-view.component';

describe('OrderCompletionViewComponent', () => {
  let component: OrderCompletionViewComponent;
  let fixture: ComponentFixture<OrderCompletionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCompletionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCompletionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
