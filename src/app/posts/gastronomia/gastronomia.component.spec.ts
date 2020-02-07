/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastronomiaComponent } from './gastronomia.component';

describe('GastronomiaComponent', () => {
  let component: GastronomiaComponent;
  let fixture: ComponentFixture<GastronomiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
