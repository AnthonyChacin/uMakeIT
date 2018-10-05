import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClienteComponent } from './header-cliente.component';

describe('HeaderClienteComponent', () => {
  let component: HeaderClienteComponent;
  let fixture: ComponentFixture<HeaderClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
