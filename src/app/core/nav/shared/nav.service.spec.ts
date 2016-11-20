/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavService } from './nav.service';
import {NavState} from "./nav-state.enum";

describe('Service: Nav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
    });
  });

  it('should ...', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
  }));

  describe('navState', () => {
    it('should return a default value of Disabled', async(inject(
      [NavService], (service) => {

        const result = service.navState;

        expect(result).toEqual(NavState.Disabled)

      })));

    it('should be able to be set to Authorised', async(inject(
      [NavService], (service) => {

        service.navState = NavState.Authorised;
        const result = service.navState;

        expect(result).toEqual(NavState.Authorised)

      })));

    it('should be able to be set to Unauthorised', async(inject(
      [NavService], (service) => {

        service.navState = NavState.Unauthorised;
        const result = service.navState;

        expect(result).toEqual(NavState.Unauthorised)

      })))
  });

});
