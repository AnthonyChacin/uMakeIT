import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegistrationFormComponent } from './new-user-registration-form.component';

describe('NewUserRegistrationFormComponent', () => {
  let component: NewUserRegistrationFormComponent;
  let fixture: ComponentFixture<NewUserRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
