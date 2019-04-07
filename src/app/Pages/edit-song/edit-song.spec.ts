import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { editsong } from './edit-song';

describe('editsong', () => {
  let component: editsong;
  let fixture: ComponentFixture<editsong>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editsong ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editsong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
