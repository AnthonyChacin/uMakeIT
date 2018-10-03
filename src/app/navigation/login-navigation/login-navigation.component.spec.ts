import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNavigationComponent } from './login-navigation.component';

describe('LoginNavigationComponent', () => {
  let component: LoginNavigationComponent;
  let fixture: ComponentFixture<LoginNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
