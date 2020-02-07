/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VinosComponent } from './vinos.component';

describe('VinosComponent', () => {
  let component: VinosComponent;
  let fixture: ComponentFixture<VinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
