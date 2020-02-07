/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RutesService } from './rutes.service';

describe('RutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutesService]
    });
  });

  it('should ...', inject([RutesService], (service: RutesService) => {
    expect(service).toBeTruthy();
  }));
});
