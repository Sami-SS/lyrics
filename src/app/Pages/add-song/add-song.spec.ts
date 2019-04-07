import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addsong } from './add-song';

describe('addsong', () => {
  let component: addsong;
  let fixture: ComponentFixture<addsong>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addsong ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addsong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
