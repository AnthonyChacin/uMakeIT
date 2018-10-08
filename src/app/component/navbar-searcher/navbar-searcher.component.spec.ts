import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearcherComponent } from './navbar-searcher.component';

describe('NavbarSearcherComponent', () => {
  let component: NavbarSearcherComponent;
  let fixture: ComponentFixture<NavbarSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
