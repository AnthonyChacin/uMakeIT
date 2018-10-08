import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorHomeNavigationComponent } from './administrator-home-navigation.component';

describe('AdministratorHomeNavigationComponent', () => {
  let component: AdministratorHomeNavigationComponent;
  let fixture: ComponentFixture<AdministratorHomeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorHomeNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorHomeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
