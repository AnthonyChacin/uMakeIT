import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prepa5Component } from './prepa5.component';

describe('Prepa5Component', () => {
  let component: Prepa5Component;
  let fixture: ComponentFixture<Prepa5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prepa5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prepa5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
