import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { viewsong } from './view-song';

describe('viewsong', () => {
  let component: viewsong;
  let fixture: ComponentFixture<viewsong>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ viewsong ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(viewsong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
