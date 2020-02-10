/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostsCategoryLists2Component } from './posts-category-lists-2.component';

describe('PostsCategoryLists2Component', () => {
  let component: PostsCategoryLists2Component;
  let fixture: ComponentFixture<PostsCategoryLists2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCategoryLists2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCategoryLists2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
