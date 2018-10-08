import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterNewAdminComponent } from './view-register-new-admin.component';

describe('ViewRegisterNewAdminComponent', () => {
  let component: ViewRegisterNewAdminComponent;
  let fixture: ComponentFixture<ViewRegisterNewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegisterNewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisterNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
