/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtesComponent } from './artes.component';

describe('ArtesComponent', () => {
  let component: ArtesComponent;
  let fixture: ComponentFixture<ArtesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
