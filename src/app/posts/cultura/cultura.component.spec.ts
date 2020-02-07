/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CulturaComponent } from './cultura.component';

describe('CulturaComponent', () => {
  let component: CulturaComponent;
  let fixture: ComponentFixture<CulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
