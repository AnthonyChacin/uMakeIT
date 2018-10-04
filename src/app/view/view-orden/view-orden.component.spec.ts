import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdenComponent } from './view-orden.component';

describe('ViewOrdenComponent', () => {
  let component: ViewOrdenComponent;
  let fixture: ComponentFixture<ViewOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
