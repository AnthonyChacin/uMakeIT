import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCambioClaveComponent } from './view-cambio-clave.component';

describe('ViewCambioClaveComponent', () => {
  let component: ViewCambioClaveComponent;
  let fixture: ComponentFixture<ViewCambioClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCambioClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCambioClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
