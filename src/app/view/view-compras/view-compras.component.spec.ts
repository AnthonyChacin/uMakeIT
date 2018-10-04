import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComprasComponent } from './view-compras.component';

describe('ViewComprasComponent', () => {
  let component: ViewComprasComponent;
  let fixture: ComponentFixture<ViewComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
