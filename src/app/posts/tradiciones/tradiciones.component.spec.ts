/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TradicionesComponent } from './tradiciones.component';

describe('TradicionesComponent', () => {
  let component: TradicionesComponent;
  let fixture: ComponentFixture<TradicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
